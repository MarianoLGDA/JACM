import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import SidebarNav from '@/components/SidebarNav'
import { SessionProvider } from '@/components/SessionProvider'

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  title: 'José Antonio Corona Mañón - Pintor',
  description: 'Portfolio artístico de José Antonio Corona Mañón, pintor contemporáneo especializado en óleo sobre lienzo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={cormorantGaramond.className}>
        <SessionProvider>
          <div className="min-h-screen">
            <SidebarNav />
            <main className="lg:ml-64 pt-16 lg:pt-0">
              {children}
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
