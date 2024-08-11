'use client'

import { ChatList } from '@/components/chatbot/chat-list'
import { ChatPanel } from '@/components/chatbot/chat-panel'
import { EmptyScreen } from '@/components/chatbot/empty-screen'
import { AuthSession } from '@/lib/auth/utils'
import { Message } from '@/lib/chat/actions'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { useScrollAnchor } from '@/lib/hooks/use-scroll-anchor'
import { cn } from '@/lib/utils'
import { useAIState, useUIState } from 'ai/rsc'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
  session?: AuthSession
  missingKeys: string[]
}

export function Chat({ id, className, session, missingKeys }: ChatProps): any {
  const router = useRouter()
  const path = usePathname()
  const [input, setInput] = useState('')
  const [messages] = useUIState()
  const [aiState] = useAIState()

  const [_, setNewChatId] = useLocalStorage('newChatId', id)

  useEffect(() => {
    if (session?.session?.user != null) {
      if (!path.includes('chat') && messages.length === 1) {
        window.history.replaceState({}, '', `tutor/chat/${id}`)
      }
    }
  }, [id, path, session, messages])

  useEffect(() => {
    const messagesLength = aiState.messages?.length
    if (messagesLength === 2) {
      router.refresh()
    }
  }, [aiState.messages, router])

  useEffect(() => {
    setNewChatId(id)
  })

  useEffect(() => {
    missingKeys.map(key => {
      toast.error(`Missing ${key} environment variable!`)
    })
  }, [missingKeys])

  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor()

  return (
    <div
      className='group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]'
      ref={scrollRef}
    >
      <div
        className={cn('pb-[160px] pt-4 md:pt-10', className)}
        ref={messagesRef}
      >
        {messages.length
          ? (
            <ChatList messages={messages} isShared={false} session={session} />
          )
          : (
            <EmptyScreen />
          )}
        <div className='h-px w-full' ref={visibilityRef} />
      </div>
      <ChatPanel
        id={id}
        input={input}
        setInput={setInput}
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
    </div>
  )
}
