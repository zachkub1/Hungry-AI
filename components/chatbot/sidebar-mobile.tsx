'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/chatbot/ui/sheet'

import { Sidebar } from '@/components/chatbot/sidebar'
import { Button } from '@/components/chatbot/ui/button'

import { GalleryHorizontal, GalleryHorizontalEndIcon } from 'lucide-react'

interface SidebarMobileProps {
  children: React.ReactNode
}

export function SidebarMobile({ children }: SidebarMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="-ml-2 flex size-9 p-0 lg:hidden">
          <GalleryHorizontalEndIcon className="size-6" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="inset-y-0 flex h-auto w-[300px] flex-col p-0"
      >
        <Sidebar className="flex">{children}</Sidebar>
      </SheetContent>
    </Sheet>
  )
}
