'use client'

import * as React from 'react'

import { useSidebar } from '@/lib/hooks/use-sidebar'
import { Button } from '@/components/chatbot/ui/button'
import { IconSidebar } from '@/components/chatbot/ui/icons'
import { GalleryHorizontalEndIcon } from 'lucide-react'

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      className="-ml-2 hidden size-9 p-0 lg:flex"
      onClick={() => {
        toggleSidebar()
      }}
    >
      <GalleryHorizontalEndIcon className="size-6" />
      <span className="sr-only">History</span>
    </Button>
  )
}
