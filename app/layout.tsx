import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sharpline Offset Printers | Professional Printing & Design Services',
  description: 'Sharpline Offset Printers offers high-quality printing services for boxes, notebook covers, medicine boxes, ice cream boxes, custom boxes, chocolate boxes, flyers, and more. We also provide graphic design services.',
  keywords: 'offset printing, graphic design, custom boxes, packaging, flyers, printing services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
