import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { getChat, getMissingKeys } from '@/app/actions'
import { Chat } from '@/components/chatbot/chat'
import { checkAuth, getUserAuth } from '@/lib/auth/utils'
import { AI as AiComponent } from '@/lib/chat/actions'
import appConstants from '@/config/constants'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata ({
  params
}: ChatPageProps): Promise<Metadata> {
  await checkAuth()
  const { session } = await getUserAuth()

  if ((session?.user) == null) {
    return {}
  }

  const chat = await getChat(params.id, session.user.id)
  return {
    title: chat?.title.toString().slice(0, 50) ?? 'Chat'
  }
}

export default async function Page ({ params }: ChatPageProps): Promise<JSX.Element> {
  const session = await getUserAuth()
  const missingKeys = await getMissingKeys()

  if ((session?.session?.user) == null) {
    redirect(`/login?next=${appConstants.TUTOR_ROUTE}/${params.id}`)
  }

  const userId = session.session?.user.id
  const chat = await getChat(params.id, userId)

  if (chat == null) {
    redirect(appConstants.TUTOR_ROUTE)
  }

  if (chat?.userId !== session?.session?.user?.id) {
    notFound()
  }

  return (
    <AiComponent initialAIState={{ chatId: chat.id, messages: chat.messages }}>
      <Chat
        id={chat.id}
        session={session}
        initialMessages={chat.messages}
        missingKeys={missingKeys}
      />
    </AiComponent>
  )
}
