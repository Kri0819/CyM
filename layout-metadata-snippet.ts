import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CyM',
  description: 'Clear the little things, so your Mind can rest.',
  openGraph: {
    title: 'CyM',
    description: 'Clear the little things, so your Mind can rest.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyM',
    description: 'Clear the little things, so your Mind can rest.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}
