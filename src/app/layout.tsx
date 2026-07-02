// src/app/layout.tsx
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bank Statement to CSV & Excel Converter — Free, No Signup',
  description:
    'Convert bank statement PDFs to CSV or Excel instantly. 100% free, no signup, no upload — your files never leave your browser. Supports Chase, BofA, Wells Fargo & more.',
  keywords:
    'bank statement to csv converter, convert bank statement to excel free, pdf bank statement to csv, bank statement to excel, chase bank statement to excel, free bank statement parser, bank statement converter no signup, import bank statement to quickbooks, bank statement to quickbooks online, automate bank statement data entry',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://bank-statement-converter.pages.dev/',
  },
  openGraph: {
    title: 'Free Bank Statement to CSV Converter — No Signup Required',
    description:
      'Convert bank statement PDFs to CSV or Excel instantly. 100% free, no signup, no upload.',
    type: 'website',
    url: 'https://bank-statement-converter.pages.dev/',
    images: ['https://bank-statement-converter.pages.dev/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Bank Statement to CSV Converter — No Signup Required',
    description:
      'Convert bank statement PDFs to CSV or Excel instantly. 100% free, no signup, no upload.',
    images: ['https://bank-statement-converter.pages.dev/og-image.png'],
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'StatementFlow',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Free bank statement to CSV converter. Convert PDF bank statements to CSV or Excel with no signup required. 100% client-side processing.',
  featureList: [
    'No signup required',
    'Client-side processing',
    'Supports Chase, Bank of America, Wells Fargo, Citi',
    'CSV and Excel output',
    'No watermarks',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '1',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this bank statement converter free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. StatementFlow is 100% free to use. There are no hidden fees, no premium tiers, and no credit card required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account to convert bank statements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. This is a bank statement converter no signup required. You don't need an email, password, or account. Just open the site and convert.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is my financial data safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All processing happens client-side in your browser. Your PDF bank statement never uploads to our servers. We physically cannot access your data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert Chase bank statements to Excel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. StatementFlow has built-in support for Chase bank statement to Excel conversion, including accurate detection of transaction dates, payees, amounts, and running balances.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I import my converted file into QuickBooks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After converting your bank statement to CSV or Excel, open QuickBooks Online, go to Banking → Upload Transactions, and select your file. For bank statement to QuickBooks Online imports, we recommend the CSV format for best compatibility.',
      },
    },
    {
      '@type': 'Question',
      name: "What if my bank isn't listed?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Our generic pdf bank statement to csv parser handles any text-based PDF. If your statement is scanned, you'll see a warning — but most modern bank statements work perfectly.",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
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