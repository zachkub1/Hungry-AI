import { Providers } from '@/components/chatbot/providers'
import { SidebarDesktop } from '@/components/chatbot/sidebar-desktop'

interface TutorLayoutProps {
  children: React.ReactNode
}
export default function Layout ({ children }: TutorLayoutProps): JSX.Element {
  return (
    <Providers
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <SidebarDesktop></SidebarDesktop>
      {children}
    </Providers>
  )
}
