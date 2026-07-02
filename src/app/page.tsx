// src/app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import {
  HowItWorksSection,
  PrivacySection,
  SupportedBanksSection,
  QuickBooksSection,
  PainPointSection,
  FAQSection,
  Footer,
} from '@/components/LandingPageSections';

// Converter needs client-side only (pdf.js, file APIs)
const ConverterContainer = dynamic(
  () => import('@/components/ConverterContainer'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-900">
      {/* Hero + Converter (above the fold) */}
      <ConverterContainer />

      {/* SEO Content Sections — heading hierarchy: H2 → H3 */}
      <HowItWorksSection />
      <PrivacySection />
      <SupportedBanksSection />
      <QuickBooksSection />
      <PainPointSection />
      <FAQSection />
      <Footer />
    </main>
  );
}