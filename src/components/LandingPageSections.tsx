// src/components/LandingPageSections.tsx
import React from 'react';

/* ─────────────────────────────────────────────
   H2: How to Convert Bank Statement to Excel Free
   ───────────────────────────────────────────── */
export function HowItWorksSection() {
  const steps = [
    {
      num: '1',
      title: 'Upload Your PDF',
      desc: 'Upload your PDF bank statement — drag & drop or click to select',
    },
    {
      num: '2',
      title: 'Auto-Detect Format',
      desc: 'Our tool automatically detects your bank format (Chase, Bank of America, Wells Fargo, Citi, and more)',
    },
    {
      num: '3',
      title: 'Preview & Edit',
      desc: 'Preview your extracted transactions — edit any misread data inline',
    },
    {
      num: '4',
      title: 'Download',
      desc: 'Download as CSV or Excel — no watermarks, no limits, no signup',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-12">
          How to Convert Bank Statement to Excel Free
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-extrabold text-xl mb-5">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   H2: The Only Bank Statement Converter No Signup Required
   ───────────────────────────────────────────── */
export function PrivacySection() {
  const checkItems = [
    'No email required',
    'No credit card required',
    'No account creation',
    'No tracking cookies',
  ];

  return (
    <section id="privacy" className="py-16 relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The Only Bank Statement Converter No Signup Required
            </h2>
          </div>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Unlike other tools, StatementFlow is a{' '}
              <strong className="text-slate-800 dark:text-slate-200">free bank statement parser</strong>{' '}
              that works entirely in your browser. Your PDF never uploads to our servers. We can&rsquo;t see your transactions. No one can.
            </p>
            <ul className="space-y-2.5">
              {checkItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <strong className="text-slate-800 dark:text-slate-200">Your data never leaves your device</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   H2: PDF Bank Statement to CSV — Works With Every Major Bank
   ───────────────────────────────────────────── */
export function SupportedBanksSection() {
  return (
    <section id="supported-banks" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-4">
          PDF Bank Statement to CSV — Works With Every Major Bank
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto">
          StatementFlow automatically detects and parses statements from:
        </p>
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 sm:p-10 shadow-sm">
          <ul className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
              <span>
                <strong className="text-slate-800 dark:text-slate-200">Chase bank statement to Excel</strong>{' '}
                — fully supported with accurate date and amount extraction
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
              <span>
                <strong className="text-slate-800 dark:text-slate-200">Bank of America</strong>{' '}
                — detects BofA format automatically
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
              <span>
                <strong className="text-slate-800 dark:text-slate-200">Wells Fargo</strong>{' '}
                — handles multi-page statements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
              <span>
                <strong className="text-slate-800 dark:text-slate-200">Citibank / Citi</strong>{' '}
                — parses Citi credit card and checking statements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
              <span>
                <strong className="text-slate-800 dark:text-slate-200">Capital One, PNC, US Bank, TD Bank,</strong>{' '}
                and 50+ more
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 bg-slate-50/80 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200/50 dark:border-slate-700/50">
            Don&rsquo;t see your bank? Our generic parser handles any{' '}
            <strong className="text-slate-700 dark:text-slate-300">pdf bank statement to csv</strong>{' '}
            conversion.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   H2: Import Bank Statement to QuickBooks — The Easy Way
   ───────────────────────────────────────────── */
export function QuickBooksSection() {
  const steps = [
    {
      num: '1',
      text: 'Convert your bank statement PDF to CSV using StatementFlow',
    },
    {
      num: '2',
      text: 'Open QuickBooks Online → Banking → Upload Transactions',
    },
    {
      num: '3',
      text: 'Select your CSV file — QuickBooks maps the columns automatically',
    },
  ];

  return (
    <section id="quickbooks" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-10">
          Import Bank Statement to QuickBooks — The Easy Way
        </h2>
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 sm:p-10 shadow-sm">
          <ol className="space-y-5 mb-8">
            {steps.map((step) => (
              <li key={step.num} className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold text-sm shrink-0">
                  {step.num}
                </span>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                  {step.text}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Works with{' '}
            <strong className="text-slate-800 dark:text-slate-200">QuickBooks Online</strong>,{' '}
            QuickBooks Desktop,{' '}
            <strong className="text-slate-800 dark:text-slate-200">Xero</strong>,{' '}
            FreshBooks, Wave, and any accounting software that accepts CSV or Excel imports.
          </p>
          <p className="text-slate-700 dark:text-slate-300 font-medium bg-indigo-50/80 dark:bg-indigo-950/30 rounded-xl p-4 border border-indigo-200/50 dark:border-indigo-800/50">
            No more <strong>manually entering bank transactions into Excel</strong>.{' '}
            <strong>Automate bank statement data entry</strong> in under 60 seconds.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   H2: Stop Manually Entering Bank Transactions Into Excel
   ───────────────────────────────────────────── */
export function PainPointSection() {
  const benefits = [
    'Save 30+ minutes per statement',
    'Eliminate typos and copy-paste errors',
    'Get clean, structured data ready for analysis',
    'Convert bank statement to spreadsheet format in one click',
  ];

  return (
    <section id="pain-point" className="py-16 relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-10">
          Stop Manually Entering Bank Transactions Into Excel
        </h2>
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 sm:p-10 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            If you&rsquo;re tired of copy-pasting transactions from PDFs into spreadsheets, StatementFlow is the{' '}
            <strong className="text-slate-800 dark:text-slate-200">automate bank statement data entry</strong>{' '}
            tool you&rsquo;ve been looking for.
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-slate-600 dark:text-slate-400">
                  {benefit.includes('Convert bank statement to spreadsheet') ? (
                    <>
                      <strong className="text-slate-800 dark:text-slate-200">Convert bank statement to spreadsheet</strong>{' '}
                      format in one click
                    </>
                  ) : (
                    <strong className="text-slate-800 dark:text-slate-200">{benefit}</strong>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   H2: FAQ (with H3 sub-headings for rich snippets)
   ───────────────────────────────────────────── */
export function FAQSection() {
  const faqs = [
    {
      q: 'Is this bank statement converter free?',
      a: 'Yes. StatementFlow is 100% free to use. There are no hidden fees, no premium tiers, and no credit card required.',
    },
    {
      q: 'Do I need to create an account to convert bank statements?',
      a: (
        <>
          No. This is a <strong>bank statement converter no signup</strong> required. You don&rsquo;t need an email, password, or account. Just open the site and convert.
        </>
      ),
    },
    {
      q: 'Is my financial data safe?',
      a: 'Yes. All processing happens client-side in your browser. Your PDF bank statement never uploads to our servers. We physically cannot access your data.',
    },
    {
      q: 'Can I convert Chase bank statements to Excel?',
      a: (
        <>
          Yes. StatementFlow has built-in support for <strong>Chase bank statement to Excel</strong> conversion, including accurate detection of transaction dates, payees, amounts, and running balances.
        </>
      ),
    },
    {
      q: 'How do I import my converted file into QuickBooks?',
      a: (
        <>
          After converting your bank statement to CSV or Excel, open QuickBooks Online, go to Banking → Upload Transactions, and select your file. For{' '}
          <strong>bank statement to QuickBooks Online</strong> imports, we recommend the CSV format for best compatibility.
        </>
      ),
    },
    {
      q: "What if my bank isn't listed?",
      a: (
        <>
          Our generic <strong>pdf bank statement to csv</strong> parser handles any text-based PDF. If your statement is scanned, you&rsquo;ll see a warning — but most modern bank statements work perfectly.
        </>
      ),
    },
  ];

  return (
    <section id="faq" className="py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-12">
          FAQ
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <article
              key={idx}
              className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Footer
   ───────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="py-10 relative z-10 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} StatementFlow. The free{' '}
          <strong className="text-slate-600 dark:text-slate-300">bank statement to CSV converter</strong>{' '}
          with no signup, no upload, and 100% privacy.
        </p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Privacy
          </a>
          <a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            FAQ
          </a>
          <a href="#how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            How it Works
          </a>
        </div>
      </div>
    </footer>
  );
}
