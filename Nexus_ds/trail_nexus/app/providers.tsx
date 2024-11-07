// app/providers.tsx
'use client'

import {NexusUIProvider} from '@nexus-ds/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NexusUIProvider>
      {children}
    </NexusUIProvider>
  )
}