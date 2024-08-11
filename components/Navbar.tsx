'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { AlignRight } from 'lucide-react'
import { defaultLinks } from '@/config/nav'
import { UserButton, useUser } from '@clerk/nextjs'
import { SidebarToggle } from './chatbot/sidebar-toggle'
import { SidebarMobile } from './chatbot/sidebar-mobile'
import { ChatHistory } from './chatbot/chat-history'

const UserDetails = ({ user }: { user: any }): JSX.Element | null => {
  return (
    <div className='flex items-center justify-between w-full border-t border-border pt-4 px-2'>
        <UserButton afterSignOutUrl='/' />
      </div>
  )
}

export default function Navbar (): JSX.Element {

  const { isLoaded, isSignedIn, user } = useUser();

  const pathname = usePathname()
  const showHistory = pathname.includes('/app/tutor')

  const userId = user ? user.id : ''

  const [open, setOpen] = useState(false)
  return (
    <div className='md:hidden border-b mb-4 pb-2 w-full'>
      <nav className='flex justify-between w-full items-center'>
        {showHistory ? (<>
          <SidebarMobile>
          <ChatHistory userId={userId} />
          </SidebarMobile>
          <SidebarToggle />
        </>) : (<> </>) }
        <div className='font-semibold text-lg'>MSAI</div>
        <Button variant='ghost' onClick={() => setOpen(!open)}>
          <AlignRight />
        </Button>
        
      </nav>
      {open
        ? (
          <div className='my-4 p-4 bg-muted'>
            <ul className='space-y-2'>
              {defaultLinks.map((link) => (
                <li key={link.title} onClick={() => setOpen(false)} className=''>
                  <Link
                    href={link.href}
                    className={
                    pathname === link.href
                      ? 'text-primary hover:text-primary font-semibold'
                      : 'text-muted-foreground hover:text-primary'
                  }
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <UserDetails user={user} />
              </li>
            </ul>
          </div>
          )
        : null}
    </div>
  )
}
