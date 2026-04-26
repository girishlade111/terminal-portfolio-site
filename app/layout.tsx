import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ladestack.in'),
  title: {
    default: 'Girish Balaso Lade | Automation Tester & Programmer - Interactive Terminal Portfolio',
    template: '%s | Girish Lade - Automation Tester & Programmer',
  },
  description: 'Interactive terminal-style portfolio website of Girish Balaso Lade, an Automation Tester, Programmer, UI/UX Designer, and Founder of Ladestack. Explore skills, projects, experience, and contact information through a CLI-style interface.',
  keywords: [
    'Girish Lade',
    'Girish Balaso Lade',
    'Automation Tester',
    'Programmer',
    'UI/UX Designer',
    'Ladestack',
    'Web Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'React Developer',
    'Next.js Developer',
    'Portfolio Website',
    'Developer Portfolio',
    'Terminal Portfolio',
    'CLI Portfolio',
    'Interactive Portfolio',
        'Ladestack',
  ],
  authors: [
    {
      name: 'Girish Lade',
      url: 'https://github.com/girishlade111',
    },
  ],
  creator: 'Girish Lade',
  publisher: 'Girish Lade',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ladestack.in',
    siteName: 'Girish Lade - Terminal Portfolio',
    title: 'Girish Balaso Lade | Automation Tester & Programmer - Interactive Terminal Portfolio',
    description: 'Interactive terminal-style portfolio website of Girish Balaso Lade, an Automation Tester, Programmer, UI/UX Designer, and Founder of Ladestack.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Girish Lade - Automation Tester & Programmer Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Girish Balaso Lade | Automation Tester & Programmer - Interactive Terminal Portfolio',
    description: 'Interactive terminal-style portfolio website of Girish Balaso Lade, an Automation Tester and Programmer.',
    creator: '@girish_lade',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Girish Lade - Automation Tester & Programmer Portfolio',
      },
    ],
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

  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },

  category: 'technology',
  classification: 'Portfolio Website, Developer Portfolio, Automation Tester, Programmer, UI/UX Designer',
}

export const viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ladestack.in" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}