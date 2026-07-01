// src/components/DataPreview.tsx
'use client';
import React from 'react';
import { Transaction } from '@/lib/tableExtractor';

interface DataPreviewProps {
  data: Transaction[];
  onDataChange: (updatedData: Transaction[]) => void;
}

export default function DataPreview({ data, onDataChange }: DataPreviewProps) {
  const updateCell = (id: string, key: keyof Transaction, val: string | number) => {
    const updated = data.map((item) => {
      if (item.id === id) {
        return { ...item, [key]: val, type: key === 'amount' ? (Number(val) < 0 ? 'DEBIT' : 'CREDIT') : item.type };
      }
      return item;
    });
    onDataChange(updated);
  };

  return (
    <div className="w-full overflow-x-auto bg-transparent">
      <table className="w-full text-sm text-left whitespace-nowrap">
        <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700/50">
          <tr>
            <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Date</th>
            <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Description / Payee</th>
            <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Amount</th>
            <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Type</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
          {data.map((row, idx) => (
            <tr key={row.id} className={`transition-colors hover:bg-indigo-50/40 dark:hover:bg-indigo-900/20 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-slate-50/30 dark:bg-slate-800/20'}`}>
              <td className="px-4 py-3">
                <input 
                  type="text" 
                  value={row.date} 
                  onChange={(e) => updateCell(row.id, 'date', e.target.value)}
                  className="w-full bg-transparent border-b border-transparent hover:border-slate-300 dark:hover:border-slate-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 rounded-sm px-2 py-1.5 outline-none transition-all text-slate-700 dark:text-slate-300 placeholder:text-slate-400"
                  placeholder="Date"
                />
              </td>
              <td className="px-4 py-3 w-full">
                <input 
                  type="text" 
                  value={row.description} 
                  onChange={(e) => updateCell(row.id, 'description', e.target.value)}
                  className="w-full min-w-[300px] bg-transparent border-b border-transparent hover:border-slate-300 dark:hover:border-slate-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 rounded-sm px-2 py-1.5 outline-none transition-all text-slate-900 dark:text-slate-100 font-medium"
                  placeholder="Description"
                />
              </td>
              <td className="px-4 py-3">
                <input 
                  type="number" 
                  value={row.amount} 
                  onChange={(e) => updateCell(row.id, 'amount', parseFloat(e.target.value) || 0)}
                  className="w-32 bg-transparent border-b border-transparent hover:border-slate-300 dark:hover:border-slate-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 rounded-sm px-2 py-1.5 outline-none transition-all font-mono text-slate-700 dark:text-slate-300 text-right"
                  placeholder="0.00"
                />
              </td>
              <td className="px-6 py-3">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${
                  row.type === 'DEBIT' 
                  ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800/50' 
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/50'
                }`}>
                  {row.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}