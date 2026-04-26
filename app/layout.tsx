import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://v0-terminal-portfolio-site.vercel.app'),
  title: {
    default: 'Muhammad Ali | MERN Stack Developer - Interactive Terminal Portfolio',
    template: '%s | Muhammad Ali - MERN Stack Developer',
  },
  description: 'Interactive terminal-style portfolio website of Muhammad Ali, a MERN Stack and React Native Developer with 2+ years of experience. Explore skills, projects, experience, and contact information through a CLI-style interface.',
  keywords: [
    'Muhammad Ali',
    'MERN Stack Developer',
    'React Native Developer',
    'Full Stack Developer',
    'Web Developer',
    'Mobile App Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'React Developer',
    'MongoDB Developer',
    'Express.js Developer',
    'Next.js Developer',
    'Portfolio Website',
    'Developer Portfolio',
    'Terminal Portfolio',
    'CLI Portfolio',
    'Interactive Portfolio',
  ],
  authors: [
    {
      name: 'Muhammad Ali',
      url: 'https://github.com/muhammadali',
    },
  ],
  creator: 'Muhammad Ali',
  publisher: 'Muhammad Ali',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://v0-terminal-portfolio-site.vercel.app',
    siteName: 'Muhammad Ali - Terminal Portfolio',
    title: 'Muhammad Ali | MERN Stack Developer - Interactive Terminal Portfolio',
    description: 'Interactive terminal-style portfolio website of Muhammad Ali, a MERN Stack and React Native Developer with 2+ years of experience. Explore skills, projects, experience, and contact information through a CLI-style interface.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Ali - MERN Stack Developer Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Ali | MERN Stack Developer - Interactive Terminal Portfolio',
    description: 'Interactive terminal-style portfolio website of Muhammad Ali, a MERN Stack and React Native Developer with 2+ years of experience.',
    creator: '@muhammadali',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Ali - MERN Stack Developer Portfolio',
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
  classification: 'Portfolio Website, Developer Portfolio, MERN Stack Developer',
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
        <link rel="canonical" href="https://v0-terminal-portfolio-site.vercel.app" />
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