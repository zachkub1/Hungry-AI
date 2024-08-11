import * as React from 'react'

import { shareChat } from '@/app/actions'
import { UserMessage } from '@/components/streamComponents/message'
import { ButtonScrollToBottom } from '@/components/chatbot/button-scroll-to-bottom'
import { ChatShareDialog } from '@/components/chatbot/chat-share-dialog'
import { FooterText } from '@/components/chatbot/footer'
import { PromptForm } from '@/components/chatbot/prompt-form'
import { IconShare } from '@/components/chatbot/ui/icons'
import { Button } from '@/components/ui/button'
import type { AI } from '@/lib/chat/actions'
import { useAIState, useActions, useUIState } from 'ai/rsc'
import { nanoid } from 'nanoid'

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ChatPanel ({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom
}: ChatPanelProps): any {
  const [aiState] = useAIState()
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)

  const exampleMessages = [
    {
      heading: 'Tell me About COPD',
      subheading: 'COPD',
      message: 'What is COPD?'
    },
    {
      heading: 'Tell me About Amlodipine',
      subheading: 'Amlodipine',
      message: 'What is Amlodipine?'
    },
  ]

  return (
    <div className='w-full bg-background'>
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />

      <div className='fixed right-0 left-0 md:left-[166px] lg:left-[500px] bottom-0 mx-auto sm:max-w-2xl sm:px-4'>
        <div className='mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0'>
          {messages.length === 0 &&
            exampleMessages.map((example, index) => (
              <div
                key={example.heading}
                className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 ${index > 1 && 'hidden md:block'
                  }`}
                onClick={async () => {
                  setMessages(currentMessages => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{example.message}</UserMessage>
                    }
                  ])

                  const responseMessage = await submitUserMessage(
                    example.message
                  )

                  setMessages(currentMessages => [
                    ...currentMessages,
                    responseMessage
                  ])
                }}
              >
                <div className='text-sm font-semibold'>{example.heading}</div>
                <div className='text-sm text-zinc-600'>
                  {example.subheading}
                </div>
              </div>
            ))}
        </div>

        {messages?.length >= 2
          ? (
            <div className='flex h-12 items-center justify-center'>
              <div className='flex space-x-2'>
                {id && title
                  ? (
                    <>
                      <Button
                        variant='outline'
                        onClick={() => setShareDialogOpen(true)}
                      >
                        <IconShare className='mr-2' />
                        Share
                      </Button>
                      <ChatShareDialog
                        open={shareDialogOpen}
                        onOpenChange={setShareDialogOpen}
                        onCopy={() => setShareDialogOpen(false)}
                        shareChat={shareChat}
                        chat={{
                          id,
                          title,
                          messages: aiState.messages
                        }}
                      />
                    </>
                    )
                  : null}
              </div>
            </div>
            )
          : null}

        <div className='space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4'>
          <PromptForm input={input} setInput={setInput} />
          <FooterText className='hidden sm:block' />
        </div>
      </div>
    </div>
  )
}
