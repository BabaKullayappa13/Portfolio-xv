import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Baba Kullayappa — Full Stack Developer & AWS Cloud Enthusiast',
  description:
    'Portfolio of Moyeellacheruvu Baba Kullayappa — Final-year Computer Science & Engineering student, full-stack developer, and AWS cloud enthusiast. Explore projects, skills, certifications, and achievements.',
  generator: 'v0.app',
  keywords: [
    'Baba Kullayappa',
    'Full Stack Developer',
    'React Developer',
    'Python Developer',
    'AWS Cloud',
    'Portfolio',
    'Computer Science',
  ],
  authors: [{ name: 'Moyeellacheruvu Baba Kullayappa' }],
  openGraph: {
    title: 'Baba Kullayappa — Full Stack Developer & AWS Cloud Enthusiast',
    description:
      'Final-year CSE student, full-stack developer, and AWS cloud enthusiast. Explore projects, skills, and achievements.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
