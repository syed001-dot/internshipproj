import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Serena Blake - Clinical Psychologist | Los Angeles',
  description: 'Dr. Serena Blake is a licensed clinical psychologist in Los Angeles, CA, specializing in anxiety, relationship counseling, and trauma recovery. Book your free consultation today.',
  keywords: 'psychologist, therapy, anxiety, relationship counseling, trauma recovery, Los Angeles, Dr. Serena Blake',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 