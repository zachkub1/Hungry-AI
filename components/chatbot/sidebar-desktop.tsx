import { Sidebar } from '@/components/chatbot/sidebar'

import { ChatHistory } from '@/components/chatbot/chat-history'
import { getUserAuth } from '@/lib/auth/utils'

export async function SidebarDesktop() {
  const { session } = await getUserAuth()

  if (!session?.user?.id) {
    return null
  }

  return (
    <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      {/* @ts-ignore */}
      <ChatHistory userId={session.user.id} />
    </Sidebar>
  )
}
