import SidebarItems from './SidebarItems'; import { UserButton } from '@clerk/nextjs'

import { AuthSession, getUserAuth } from '@/lib/auth/utils'
import Image from 'next/image';

const Sidebar = async (): Promise<JSX.Element | null> => {
  const session = await getUserAuth()
  if (session.session === null) return null

  return (
    <aside className='h-screen min-w-screen bg-muted hidden md:block p-4 pt-8 border-r border-border shadow-inner z-50'>
      <div className='flex flex-col justify-between h-full'>
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold ml-4'>
            <Image src='/img/MSAIFullText.svg' alt='Logo' width={100} height={100} />
          </h3>
          <SidebarItems />
        </div>
        <UserDetails session={session} />
      </div>
    </aside>
  )
}

export default Sidebar

const UserDetails = ({ session }: { session: AuthSession }): JSX.Element | null => {
  if (session.session === null) return null
  const { user } = session.session
  if (user.name === undefined || user.name === '' || user.name.length === 0) return null

  return (
    <div className='flex items-center justify-between w-full border-t border-border pt-4 px-2'>
        <UserButton afterSignOutUrl='/' />
      </div>
  )
}
