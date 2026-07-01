// src/app/layout.tsx
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bank Statement Converter',
  description: 'Convert PDF statements to CSV securely',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body 
        className={`${outfit.className} min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30`} 
        suppressHydrationWarning
      >
        {/* Ambient background gradients */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten transform translate-y-1/3"></div>
        </div>
        {children}
      </body>
    </html>
  )
}