import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from '@/components/chatbot/providers'
export default async function AppLayout ({
  children
}: {
  children: React.ReactNode
}): Promise<JSX.Element> {
  return (
    <main>
      <ClerkProvider>
        <Providers>
        <div className='flex h-screen'>
          <Sidebar />
          <main className='flex-1 pb-0 mb-0 md:p-8 md:pb-0 pt-2 p-8 overflow-y-auto'>
            <Navbar />
            {children}
          </main>
        </div>
        </Providers>
      </ClerkProvider>
      <Toaster richColors />
    </main>
  )
}
