// src/components/ConverterContainer.tsx
'use client';
import React, { useState } from 'react';
import FileUploader from './FileUploader';
import DataPreview from './DataPreview';
import DownloadButtons from './DownloadButtons';
import { extractTextFromPdf } from '@/lib/pdfParser';
import { parseTransactions, Transaction } from '@/lib/tableExtractor';
import { BankFormat } from '@/lib/bankFormats';

const DEMO_TRANSACTIONS: Transaction[] = [
    { id: 'demo-1', date: '2025-06-01', description: 'Direct Deposit - ACME Corp Payroll', amount: 3250.00, type: 'CREDIT', balance: '5,780.42' },
    { id: 'demo-2', date: '2025-06-02', description: 'Whole Foods Market #10234', amount: -87.32, type: 'DEBIT', balance: '5,693.10' },
    { id: 'demo-3', date: '2025-06-03', description: 'Shell Oil Gas Station', amount: -52.18, type: 'DEBIT', balance: '5,640.92' },
    { id: 'demo-4', date: '2025-06-05', description: 'Netflix Monthly Subscription', amount: -15.99, type: 'DEBIT', balance: '5,624.93' },
    { id: 'demo-5', date: '2025-06-06', description: 'Venmo Transfer - John D.', amount: -200.00, type: 'DEBIT', balance: '5,424.93' },
    { id: 'demo-6', date: '2025-06-08', description: 'Amazon.com Purchase', amount: -134.56, type: 'DEBIT', balance: '5,290.37' },
    { id: 'demo-7', date: '2025-06-10', description: 'Starbucks Coffee', amount: -6.45, type: 'DEBIT', balance: '5,283.92' },
    { id: 'demo-8', date: '2025-06-12', description: 'Refund - Return Order #98712', amount: 49.99, type: 'CREDIT', balance: '5,333.91' },
    { id: 'demo-9', date: '2025-06-15', description: 'Electric Company - Monthly Bill', amount: -142.30, type: 'DEBIT', balance: '5,191.61' },
    { id: 'demo-10', date: '2025-06-15', description: 'Direct Deposit - ACME Corp Payroll', amount: 3250.00, type: 'CREDIT', balance: '8,441.61' },
];

export default function ConverterContainer() {
    const [data, setData] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [bankInfo, setBankInfo] = useState<BankFormat | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isDemo, setIsDemo] = useState(false);

    const handleLoadDemo = () => {
        setErrorMsg(null);
        setBankInfo(null);
        setIsDemo(true);
        setData(DEMO_TRANSACTIONS);
    };

    const handleFileProcessing = async (file: File, password?: string) => {
        setIsLoading(true);
        setErrorMsg(null);
        setData([]);
        setBankInfo(null);
        setIsDemo(false);

        try {
            const extraction = await extractTextFromPdf(file, password);
            
            if (extraction.isScanned) {
                setErrorMsg("This PDF appears to be a scanned image. We can only process text-based PDFs — the kind you download directly from your bank's website.");
                setIsLoading(false);
                return;
            }

            const { transactions, bank } = parseTransactions(extraction);
            
            if (transactions.length === 0) {
                setErrorMsg("We opened your PDF successfully but couldn't find any transactions. This bank's layout may not be supported yet.");
            } else {
                setBankInfo(bank);
                setData(transactions);
            }
        } catch (err: any) {
            if (err.name === 'PasswordException') {
                const userPassword = prompt(
                    password
                        ? "That password didn't work. Please try again:"
                        : "This statement is password-protected. Please enter the password:"
                );

                if (userPassword !== null) {
                    handleFileProcessing(file, userPassword);
                    return;
                }
            } else {
                console.error("PDF Parsing Error:", err);
                setErrorMsg("Something went wrong while reading this PDF. It may be corrupted or in an unsupported format.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-24 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-full border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                    ✨ 100% Free · 100% Private · No Signup
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
                    Free Bank Statement to CSV Converter —{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">No Signup Required</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Drag and drop your bank statement PDF. Get a clean CSV or Excel file in seconds.{' '}
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Your files never leave your browser</span> — 100% private, 100% free.
                </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl shadow-indigo-100/20 dark:shadow-indigo-900/20 rounded-3xl p-6 sm:p-10 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/0 dark:from-white/5 dark:to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                    <FileUploader onFileSelect={handleFileProcessing} isLoading={isLoading} onError={(msg) => setErrorMsg(msg)} />
                    
                    {!isLoading && data.length === 0 && !errorMsg && (
                        <div className="mt-6 text-center">
                            <button
                                onClick={handleLoadDemo}
                                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline underline-offset-4 decoration-indigo-300 dark:decoration-indigo-700 hover:decoration-indigo-500 transition-colors"
                            >
                                Or try with a demo statement →
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {errorMsg && !isLoading && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-6 p-5 bg-red-50/90 dark:bg-red-950/50 backdrop-blur-md border border-red-200 dark:border-red-900/50 rounded-2xl shadow-lg shadow-red-100/20 flex items-start gap-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-full shrink-0">
                        <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Something went wrong</h4>
                        <p className="text-red-700 dark:text-red-400/90 text-sm">{errorMsg}</p>
                    </div>
                </div>
            )}

            {data.length > 0 && !isLoading && (
                <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white">
                                    {isDemo ? 'Demo Data Loaded' : <>Format Detected: <span className="text-indigo-600 dark:text-indigo-400">{bankInfo ? bankInfo.name : 'Generic'}</span></>}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {isDemo ? 'Edit the table below, then download in any format.' : `Successfully extracted ${data.length} transactions`}
                                </p>
                            </div>
                        </div>
                        <DownloadButtons data={data} />
                    </div>
                    
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-xl overflow-hidden">
                        <DataPreview data={data} onDataChange={setData} />
                    </div>
                </div>
            )}
        </div>
    );
}