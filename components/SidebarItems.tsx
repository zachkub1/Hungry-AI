'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { defaultLinks, additionalLinks } from '@/config/nav'
import { Tooltip, TooltipTrigger } from './ui/tooltip'
import { TooltipContent, TooltipProvider } from '@radix-ui/react-tooltip'

export interface SidebarLinkIF {
  title: string
  href: string
  icon: LucideIcon
}

const SidebarItems = (): JSX.Element => {
  return (
    <>
      <SidebarLinkGroup links={defaultLinks} />
      {additionalLinks.length > 0
        ? additionalLinks.map((l) => (
          <SidebarLinkGroup
            links={l.links}
            title={l.title}
            border
            key={l.title}
          />
        ))
        : null}
    </>
  )
}
export default SidebarItems

const SidebarLinkGroup = ({
  links,
  title,
  border
}: {
  links: SidebarLinkIF[]
  title?: string
  border?: boolean
}): JSX.Element => {
  const fullPathname = usePathname()
  const pathname = '/' + fullPathname.split('/')[1]

  return (
    <div className={border ? 'border-border border-t my-8 pt-4' : ''}>
      {title
        ? (
          <h4 className='px-2 mb-2 text-xs uppercase text-muted-foreground tracking-wider'>
            {title}
          </h4>
          )
        : null}
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <SidebarLink link={link} active={pathname === link.href} />
          </li>
        ))}
      </ul>
    </div>
  )
}
const SidebarLink = ({
  link,
  active
}: {
  link: SidebarLinkIF
  active: boolean
}): JSX.Element => {
  return (
    <Link
      href={link.href}
      className={`group transition-colors p-2 inline-block hover:bg-popover hover:text-primary text-muted-foreground text-xs hover:shadow rounded-md w-full${
        active ? ' text-primary font-semibold' : ''
      }`}
    >
      <div className='flex items-center'>
        <div
          className={cn(
            'opacity-0 left-0 h-6 w-[4px] absolute rounded-r-lg bg-primary',
            active ? 'opacity-100' : ''
          )}
        />
        <link.icon className='h-10 mr-1' />
        <span className='group-hover:opacity-100'>{link.title}</span>
      </div>
    </Link>
  )
}
