// src/components/FileUploader.tsx
'use client';
import React, { useState } from 'react';

interface FileUploaderProps {
    onFileSelect: (file: File) => void;
    isLoading?: boolean;
    onError?: (msg: string) => void;
}

export default function FileUploader({ onFileSelect, isLoading, onError }: FileUploaderProps) {
    const [isDragActive, setIsDragActive] = useState(false);

    const MAX_SIZE_MB = 10;

    const validateAndSelect = (file: File) => {
        if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
            onError?.('Please upload a PDF file. Other file types are not supported.');
            return;
        }
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
            onError?.(`File is too large (max ${MAX_SIZE_MB}MB). Please upload a smaller PDF.`);
            return;
        }
        onFileSelect(file);
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.type === "dragenter" || e.type === "dragover") setIsDragActive(true);
        else if (e.type === "dragleave") setIsDragActive(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0] && !isLoading) {
            validateAndSelect(e.dataTransfer.files[0]);
        }
    };

    return (
        <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            className={`relative group border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ease-out ${
                isLoading ? 'opacity-70 pointer-events-none' : 'cursor-pointer'
            } ${
                isDragActive 
                ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-900/20 scale-[1.02] shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]' 
                : 'border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 hover:shadow-lg'
            }`}
        >
            <input
                type="file"
                id="file-upload"
                accept=".pdf"
                className="hidden"
                disabled={isLoading}
                onChange={(e) => {
                    if (e.target.files?.[0]) {
                        validateAndSelect(e.target.files[0]);
                        e.target.value = '';
                    }
                }}
            />
            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                <div className={`mb-6 p-4 rounded-full transition-transform duration-300 ${
                    isDragActive 
                    ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 scale-110' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:scale-110 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-500'
                }`}>
                    {isLoading ? (
                        <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    )}
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {isLoading ? 'Processing Document...' : (
                        <><span className="text-indigo-600 dark:text-indigo-400 group-hover:underline">Click to upload</span> or drag and drop</>
                    )}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    {isLoading 
                        ? 'Extracting text and identifying table layout locally...' 
                        : 'PDF files only. Max 10MB. Secure client-side processing.'}
                </p>
            </label>
        </div>
    );
}