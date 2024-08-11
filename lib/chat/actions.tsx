import 'server-only'

import {
  createAI,
  createStreamableUI,
  getMutableAIState,
  getAIState,
  streamUI,
  createStreamableValue
} from 'ai/rsc'
import { openai } from '@ai-sdk/openai'

import {
  spinner,
  BotCard,
  BotMessage,
  SystemMessage,
  Stock,
  Purchase
} from '@/components/chatbot/stocks'

import { z } from 'zod'
import { EventsSkeleton } from '@/components/chatbot/stocks/events-skeleton'
import { Events } from '@/components/chatbot/stocks/events'
import { StocksSkeleton } from '@/components/chatbot/stocks/stocks-skeleton'
import { Stocks } from '@/components/chatbot/stocks/stocks'
import { StockSkeleton } from '@/components/chatbot/stocks/stock-skeleton'
import {
  formatNumber,
  runAsyncFnWithoutBlocking,
  sleep,
  nanoid
} from '@/lib/utils'
import { saveChat } from '@/app/actions'
import { SpinnerMessage, UserMessage } from '@/components/chatbot/stocks/message'
import { Chat } from '@/lib/types'
import { getUserAuth } from '../auth/utils'
import appConstants from '@/config/constants'

async function confirmPurchase(symbol: string, price: number, amount: number) {
  'use server'

  const aiState = getMutableAIState<typeof AI>()

  const purchasing = createStreamableUI(
    <div className='inline-flex items-start gap-1 md:items-center'>
      {spinner}
      <p className='mb-2'>
        Purchasing {amount} ${symbol}...
      </p>
    </div>
  )

  const systemMessage = createStreamableUI(null)

  runAsyncFnWithoutBlocking(async () => {
    await sleep(1000)

    purchasing.update(
      <div className='inline-flex items-start gap-1 md:items-center'>
        {spinner}
        <p className='mb-2'>
          Purchasing {amount} ${symbol}... working on it...
        </p>
      </div>
    )

    await sleep(1000)

    purchasing.done(
      <div>
        <p className='mb-2'>
          You have successfully purchased {amount} ${symbol}. Total cost:{' '}
          {formatNumber(amount * price)}
        </p>
      </div>
    )

    systemMessage.done(
      <SystemMessage>
        You have purchased {amount} shares of {symbol} at ${price}. Total cost ={' '}
        {formatNumber(amount * price)}.
      </SystemMessage>
    )

    aiState.done({
      ...aiState.get(),
      messages: [
        ...aiState.get().messages.slice(0, -1),
        {
          id: nanoid(),
          role: 'function',
          name: 'showStockPurchase',
          content: JSON.stringify({
            symbol,
            price,
            defaultAmount: amount,
            status: 'completed'
          })
        },
        {
          id: nanoid(),
          role: 'system',
          content: `[User has purchased ${amount} shares of ${symbol} at ${price}. Total cost = ${amount * price
            }]`
        }
      ]
    })
  })

  return {
    purchasingUI: purchasing.value,
    newMessage: {
      id: nanoid(),
      display: systemMessage.value
    }
  }
}

async function submitUserMessage(content: string) {
  'use server'

  const aiState = getMutableAIState<typeof AI>()

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: 'user',
        content
      }
    ]
  })

  let textStream: undefined | ReturnType<typeof createStreamableValue<string>>
  let textNode: undefined | React.ReactNode

  const result = await streamUI({
    model: openai('gpt-3.5-turbo'),
    initial: <SpinnerMessage />,
    system: `Overview:
    •	Act as a medical tutor. Your name is "Tutor" tool. Refer to me as doctor.
    •	While ChatGPT provides generalized answers on medical topics, you should aim to offer in-depth explanations akin to what one might find in medical textbooks or journals.
    
    2)	General Formatting:
    •	Bold headings.
    •	Bold, italicize and underline text wherever necessary to separate sections and to add emphasis on key words and concepts.
    
    
    3)	Special Instructions
    •	If I ask you a specific medical question then proceed to answer that question with the information necessary for me to know as a medical doctor or student, without using the format listed below in the “teaching segment”. The “teaching segment” is designed so that you can fully explain medical topics in depth. 
    •	Refuse to answer any question not about medical information. 
    •	Stick to only using medical jargon and only use information from credible medical sources. 
    •	Recognize medical abbreviations such as ckd, aki, copd etc. Use "Abbreviation List for Medical Record" in training to recognize them.
    •	If I input a multiple choice question, use segment 6 (“reviewing answers”) to generate a response. 
    
    4)	Teaching segment:
    When I state a medical topic then proceed to include:
    Definition
    Pathophysiology
    Clinical presentation
    Diagnosis: Include diagnostic criteria
    Treatment: include specific medications, and first line treatment
    Risk factors
    Prevention
    Pathological findings
    Complications and prognosis.  
    
    
    Maintain this structure, bold headings and use bullets for subheadings.
    Then provide references for the information provided.
    
    •	You must also explain psychiatric illnesses using the format above and recognize their abbreviations such as; MDD for depression, ASD for autism, GAD for anxiety etc.
    
    If I state a medical question, then provide an in-depth medical explanation for me to know as a doctor using credible medical sources only without using the format of the "teaching segment". 
    
    If I state a general medical question you do not need to use the full breakdown of the "teaching segment", instead just answer the question. State specific medications and dosing when necessary as I am a medical doctor and I need this information as well.
    
    5)     Deep Dive Segment:
    •	If I say “Deep Dive” then ask which segment I would like more detailed information on.
    •	When I state which segment then go into greater medical detail on that segment. 
    
    6)     Testing Segment:
    •	Whenever I say "test me", then provide a 3rd order multiple choice question based on a clinical scenario including vital signs and lab values with complexity and structure similar to the USMLE exams on the topic you just taught me and test different concepts within that topic such as; Pathophysiology, Clinical presentation, diagnostic criteria, Treatment, Risk factors, Prevention, Pathological findings, Complications and prognosis. Do not test the same concept within that topic twice. Always maintain this format for creating questions . 
    •	Create a separation between the question and the answer choice so that it is easier to read and provide 5 answer choices and ensure that each answer choice is on a new line. 
    •	Ask me one question at a time and do not provide the correct answer yet, and prompt me to provide my answers.
    
    7)	Reviewing Answers:
    •	When I provide my answer; explain the correct answer in detail and expand on its topic so I can use it for medical learning.
    •	Then, explain the incorrect answers for each question in detail so it can be used for learning as well. 
    •	Do this in bullet format and include references.   
    
    If I say "test me" again, then provide a 3rd order multiple choice question based on a clinical scenario including vital signs and lab values with complexity and structure similar to the USMLE exams on the topic you just taught me and test a different concept within the topic such as; Pathophysiology, Clinical presentation, diagnostic criteria, Treatment, Risk factors, Prevention, Pathological findings, Complications and prognosis. Do not test the same concept within that topic twice. Always maintain this format for creating questions. 
    
    8)	Biostatistics and Public Health
    If I say select a topic in biostatistics or public health then, I want you to use the following format:
    •	Ask me which topic in biostatistics or public health I would like to learn. If I do state a topic, then proceed to define the topic in detail giving clinical context for the concepts. Do not follow the format under “teaching segment” for this. 
    •	Include formulas in a format I can understand. 
    •	When done explaining follow the instructions under “testing segment” to test my knowledge on the topic.
    
    9) Medications
    If I state a medication then include:
    •	General overview
    •	Clinical indications for use
    •	Mechanism of action
    •	Administration and dosages
    •	Pharmacokinetics and pharmacodynamics
    •	Adverse effects
    •	Drug-drug interactions
    •	Contraindications
    •	Toxicity and monitoring.`,
    messages: [
      ...aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content,
        name: message.name
      }))
    ],
    text: async ({ content, done, delta }) => {
      if (textStream == null) {
        textStream = createStreamableValue('')
        textNode = <BotMessage content={textStream.value} />
      }

      if (done) {
        textStream.done()
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: nanoid(),
              role: 'assistant',
              content
            }
          ]
        })
      } else {
        textStream.update(delta)
      }

      return await textNode
    },
    // tools: {
    //   listStocks: {
    //     description: 'List three imaginary stocks that are trending.',
    //     parameters: z.object({
    //       stocks: z.array(
    //         z.object({
    //           symbol: z.string().describe('The symbol of the stock'),
    //           price: z.number().describe('The price of the stock'),
    //           delta: z.number().describe('The change in price of the stock')
    //         })
    //       )
    //     }),
    //     generate: async function* ({ stocks }) {
    //       yield (
    //         <BotCard>
    //           <StocksSkeleton />
    //         </BotCard>
    //       )

    //       await sleep(1000)

    //       aiState.done({
    //         ...aiState.get(),
    //         messages: [
    //           ...aiState.get().messages,
    //           {
    //             id: nanoid(),
    //             role: 'function',
    //             name: 'listStocks',
    //             content: JSON.stringify(stocks)
    //           }
    //         ]
    //       })

    //       return (
    //         <BotCard>
    //           <Stocks props={stocks} />
    //         </BotCard>
    //       )
    //     }
    //   },
    //   showStockPrice: {
    //     description:
    //       'Get the current stock price of a given stock or currency. Use this to show the price to the user.',
    //     parameters: z.object({
    //       symbol: z
    //         .string()
    //         .describe(
    //           'The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.'
    //         ),
    //       price: z.number().describe('The price of the stock.'),
    //       delta: z.number().describe('The change in price of the stock')
    //     }),
    //     generate: async function* ({ symbol, price, delta }) {
    //       yield (
    //         <BotCard>
    //           <StockSkeleton />
    //         </BotCard>
    //       )

    //       await sleep(1000)

    //       aiState.done({
    //         ...aiState.get(),
    //         messages: [
    //           ...aiState.get().messages,
    //           {
    //             id: nanoid(),
    //             role: 'function',
    //             name: 'showStockPrice',
    //             content: JSON.stringify({ symbol, price, delta })
    //           }
    //         ]
    //       })

    //       return (
    //         <BotCard>
    //           <Stock props={{ symbol, price, delta }} />
    //         </BotCard>
    //       )
    //     }
    //   },
    //   showStockPurchase: {
    //     description:
    //       'Show price and the UI to purchase a stock or currency. Use this if the user wants to purchase a stock or currency.',
    //     parameters: z.object({
    //       symbol: z
    //         .string()
    //         .describe(
    //           'The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.'
    //         ),
    //       price: z.number().describe('The price of the stock.'),
    //       numberOfShares: z
    //         .number()
    //         .describe(
    //           'The **number of shares** for a stock or currency to purchase. Can be optional if the user did not specify it.'
    //         )
    //     }),
    //     generate: async function* ({ symbol, price, numberOfShares = 100 }) {
    //       if (numberOfShares <= 0 || numberOfShares > 1000) {
    //         aiState.done({
    //           ...aiState.get(),
    //           messages: [
    //             ...aiState.get().messages,
    //             {
    //               id: nanoid(),
    //               role: 'system',
    //               content: '[User has selected an invalid amount]'
    //             }
    //           ]
    //         })

    //         return <BotMessage content='Invalid amount' />
    //       }

    //       aiState.done({
    //         ...aiState.get(),
    //         messages: [
    //           ...aiState.get().messages,
    //           {
    //             id: nanoid(),
    //             role: 'function',
    //             name: 'showStockPurchase',
    //             content: JSON.stringify({
    //               symbol,
    //               price,
    //               numberOfShares
    //             })
    //           }
    //         ]
    //       })

    //       return (
    //         <BotCard>
    //           <Purchase
    //             props={{
    //               numberOfShares,
    //               symbol,
    //               price: +price,
    //               status: 'requires_action'
    //             }}
    //           />
    //         </BotCard>
    //       )
    //     }
    //   },
    //   getEvents: {
    //     description:
    //       'List funny imaginary events between user highlighted dates that describe stock activity.',
    //     parameters: z.object({
    //       events: z.array(
    //         z.object({
    //           date: z
    //             .string()
    //             .describe('The date of the event, in ISO-8601 format'),
    //           headline: z.string().describe('The headline of the event'),
    //           description: z.string().describe('The description of the event')
    //         })
    //       )
    //     }),
    //     generate: async function* ({ events }) {
    //       yield (
    //         <BotCard>
    //           <EventsSkeleton />
    //         </BotCard>
    //       )

    //       await sleep(1000)

    //       aiState.done({
    //         ...aiState.get(),
    //         messages: [
    //           ...aiState.get().messages,
    //           {
    //             id: nanoid(),
    //             role: 'function',
    //             name: 'getEvents',
    //             content: JSON.stringify(events)
    //           }
    //         ]
    //       })

    //       return (
    //         <BotCard>
    //           <Events props={events} />
    //         </BotCard>
    //       )
    //     }
    //   }
    // }
  })

  return {
    id: nanoid(),
    display: result.value
  }
}

export interface Message {
  role: 'user' | 'assistant' | 'system' | 'function' | 'data' | 'tool'
  content: string
  id: string
  name?: string
}

export interface AIState {
  chatId: string
  messages: Message[]
}

export type UIState = Array<{
  id: string
  display: React.ReactNode
}>

export const AI = createAI<AIState, UIState>({
  actions: {
    submitUserMessage,
    confirmPurchase
  },
  initialUIState: [],
  initialAIState: { chatId: nanoid(), messages: [] },
  onGetUIState: async () => {
    'use server'

    const { session } = await getUserAuth()

    if (session != null && session.user) {
      const aiState = getAIState()

      if (aiState != null) {
        const uiState = getUIStateFromAIState(aiState)
        return uiState
      }
    }
  },
  onSetAIState: async ({ state, done }) => {
    'use server'

    const { session } = await getUserAuth()

    if ((session != null) && session.user) {
      const { chatId, messages } = state

      const createdAt = new Date()
      const userId = session.user.id
      const path = `${appConstants.TUTOR_ROUTE}/chat/${chatId}`
      const title = messages[0].content.substring(0, 100)

      const chat: Chat = {
        id: chatId,
        title,
        userId,
        createdAt,
        messages,
        path
      }

      await saveChat(chat)
    }
  }
})

export const getUIStateFromAIState = (aiState: Chat) => {
  return aiState.messages
    .filter(message => message.role !== 'system')
    .map((message, index) => ({
      id: `${aiState.chatId}-${index}`,
      display:
        message.role === 'user'
          ? (
            <UserMessage>{message.content}</UserMessage>
          )
          : (
            <BotMessage content={message.content} />
          )
        // message.role === 'function'
        //   ? (
        //     message.name === 'listStocks'
        //       ? (
        //         <BotCard>
        //           <Stocks props={JSON.parse(message.content)} />
        //         </BotCard>
        //       )
        //       : message.name === 'showStockPrice'
        //         ? (
        //           <BotCard>
        //             <Stock props={JSON.parse(message.content)} />
        //           </BotCard>
        //         )
        //         : message.name === 'showStockPurchase'
        //           ? (
        //             <BotCard>
        //               <Purchase props={JSON.parse(message.content)} />
        //             </BotCard>
        //           )
        //           : message.name === 'getEvents'
        //             ? (
        //               <BotCard>
        //                 <Events props={JSON.parse(message.content)} />
        //               </BotCard>
        //             )
        //             : null
        //   )
        //   : message.role === 'user'
        //     ? (
        //       <UserMessage>{message.content}</UserMessage>
        //     )
        //     : (
        //       <BotMessage content={message.content} />
        //     )
    }))
}
