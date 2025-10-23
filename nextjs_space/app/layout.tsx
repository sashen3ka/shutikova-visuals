
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Aleksandra Shutikova - Графический дизайнер | Рилсмейкер',
  description: 'Создаю креативы, которые продают. Пробиваю баннерную слепоту. Портфолио графического дизайнера и рилсмейкера Aleksandra Shutikova.',
  keywords: 'графический дизайн, рилсы, креативы, Telegram ADS, дизайнер, AI-генерация, видеоконтент',
  authors: [{ name: 'Aleksandra Shutikova' }],
  creator: 'Aleksandra Shutikova',
  publisher: 'Aleksandra Shutikova',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Aleksandra Shutikova - Графический дизайнер | Рилсмейкер',
    description: 'Создаю креативы, которые продают. Пробиваю баннерную слепоту.',
    url: '/',
    siteName: 'Aleksandra Shutikova Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aleksandra Shutikova - Графический дизайнер и рилсмейкер',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aleksandra Shutikova - Графический дизайнер | Рилсмейкер',
    description: 'Создаю креативы, которые продают. Пробиваю баннерную слепоту.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
