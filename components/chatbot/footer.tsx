import React from 'react'

import { ExternalLink } from '@/components/chatbot/external-link'
import { cn } from '@/lib/utils'

export function FooterText ({ className, ...props }: React.ComponentProps<'p'>): JSX.Element {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Brought to you by the team at{' '}
      <ExternalLink href='https://helpyoumatch.com'>HelpYouMatch</ExternalLink>
      .
    </p>
  )
}
