// src/components/LandingPageSections.tsx
'use client';
import React from 'react';

const STEPS = [
  { num: '1', title: 'Upload Your PDF', desc: 'Drag and drop or click to upload your bank statement PDF. Everything stays in your browser.' },
  { num: '2', title: 'Auto-Detect & Extract', desc: 'We automatically identify your bank format and extract all transactions into a clean table.' },
  { num: '3', title: 'Preview & Download', desc: 'Review, edit if needed, then download as CSV, Excel, or JSON. Done in seconds.' },
];

const BANKS = [
  'JPMorgan Chase', 'Bank of America', 'Wells Fargo', 'Citibank',
  'Standard Chartered', 'HSBC', 'State Bank of India', 'ICICI Bank', 'HDFC Bank',
];

const FAQS = [
  { q: 'Is this tool really free?', a: 'Yes, 100% free with no hidden fees, no premium tier, and no signup required. Just upload and convert.' },
  { q: 'Is my financial data safe?', a: 'Absolutely. All processing happens entirely inside your browser. Your files are never uploaded to any server. We have zero access to your data.' },
  { q: 'What banks are supported?', a: 'We support Chase, Bank of America, Wells Fargo, Citibank, Standard Chartered, HSBC, SBI, ICICI, HDFC, and more. For unrecognized banks, our generic parser auto-detects table layouts.' },
  { q: 'Can I use this on my phone?', a: 'Yes! The converter is fully responsive and works on mobile browsers including Safari on iOS and Chrome on Android.' },
  { q: 'What if my PDF is a scanned image?', a: 'Scanned or image-based PDFs cannot be processed by this tool. You need a digitally generated PDF — the kind you download directly from your bank\'s website or app.' },
  { q: 'What output formats are available?', a: 'You can download your transactions as CSV (Excel-compatible), Excel (.xlsx), or JSON for developers.' },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-4">
          How It Works
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto">
          Three simple steps. No signup, no server upload, no hassle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.num} className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-extrabold text-xl mb-5">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SupportedBanksSection() {
  return (
    <section id="supported-banks" className="py-16 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-4">
          Supported Banks
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto">
          Auto-detection for major banks worldwide, plus a smart generic parser for everything else.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {BANKS.map((bank) => (
            <span
              key={bank}
              className="px-5 py-2.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm"
            >
              {bank}
            </span>
          ))}
          <span className="px-5 py-2.5 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200/50 dark:border-indigo-800/50 rounded-full text-sm font-medium text-indigo-600 dark:text-indigo-400 shadow-sm">
            + Generic Auto-Detect
          </span>
        </div>
      </div>
    </section>
  );
}

export function PrivacySection() {
  return (
    <section id="privacy" className="py-16 relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Your Privacy Matters</h2>
          </div>
          <div className="space-y-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            <p><strong className="text-slate-800 dark:text-slate-200">We do not collect, store, or transmit your files.</strong> All PDF processing happens entirely inside your web browser using JavaScript. No data is ever sent to a server.</p>
            <p>This tool uses no cookies (except essential ones), no Google Analytics, no Facebook Pixel, no tracking pixels, and no session recording tools.</p>
            <p>Your financial data stays on your device. Always.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-slate-900 dark:text-white font-semibold list-none">
                {faq.q}
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-10 relative z-10 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Bank Statement Converter. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy</a>
          <a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQ</a>
          <a href="#how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">How it Works</a>
        </div>
      </div>
    </footer>
  );
}
