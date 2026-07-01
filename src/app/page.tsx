// src/app/page.tsx
'use client'; // <-- Add this directive here

import dynamic from 'next/dynamic';

// Now next/dynamic with ssr: false is fully allowed here
const ConverterContainer = dynamic(
  () => import('@/components/ConverterContainer'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-900">
      <ConverterContainer />
    </main>
  );
}