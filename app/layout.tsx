import type { Metadata } from 'next'
import { Playfair_Display, Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/content'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-accent',
})

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.tagline,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} ${dancing.variable}`}>
      <body className="bg-cream text-ink">{children}</body>
    </html>
  )
}
