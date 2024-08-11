import { getMissingKeys } from '@/app/actions'
import { Chat } from '@/components/chatbot/chat'
import { getUserAuth } from '@/lib/auth/utils'
import { AI as AiComponent } from '@/lib/chat/actions'
import { nanoid } from '@/lib/utils'

export const metadata = {
  title: 'Medical Student AI'
}

export default async function IndexPage (): Promise<JSX.Element> {
  const id = nanoid()
  const session = await getUserAuth()
  const missingKeys = await getMissingKeys()

  return (
    <AiComponent initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} session={session} missingKeys={missingKeys} />
    </AiComponent>
  )
}
