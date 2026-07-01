(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/FileUploader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/FileUploader.tsx
'use client';
;
function FileUploader({ onFileSelect, isLoading, onError }) {
    _s();
    const [isDragActive, setIsDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const MAX_SIZE_MB = 10;
    const validateAndSelect = (file)=>{
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
    const handleDrag = (e)=>{
        e.preventDefault();
        if (e.type === "dragenter" || e.type === "dragover") setIsDragActive(true);
        else if (e.type === "dragleave") setIsDragActive(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0] && !isLoading) {
            validateAndSelect(e.dataTransfer.files[0]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onDragEnter: handleDrag,
        onDragOver: handleDrag,
        onDragLeave: handleDrag,
        onDrop: handleDrop,
        className: `relative group border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ease-out ${isLoading ? 'opacity-70 pointer-events-none' : 'cursor-pointer'} ${isDragActive ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-900/20 scale-[1.02] shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]' : 'border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 hover:shadow-lg'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                id: "file-upload",
                accept: ".pdf",
                className: "hidden",
                disabled: isLoading,
                onChange: (e)=>{
                    if (e.target.files?.[0]) {
                        validateAndSelect(e.target.files[0]);
                        e.target.value = '';
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FileUploader.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "file-upload",
                className: "cursor-pointer flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-6 p-4 rounded-full transition-transform duration-300 ${isDragActive ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 scale-110' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:scale-110 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-500'}`,
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "animate-spin h-8 w-8",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileUploader.tsx",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileUploader.tsx",
                                    lineNumber: 78,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FileUploader.tsx",
                            lineNumber: 76,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileUploader.tsx",
                                lineNumber: 82,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FileUploader.tsx",
                            lineNumber: 81,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FileUploader.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2",
                        children: isLoading ? 'Processing Document...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-indigo-600 dark:text-indigo-400 group-hover:underline",
                                    children: "Click to upload"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileUploader.tsx",
                                    lineNumber: 89,
                                    columnNumber: 27
                                }, this),
                                " or drag and drop"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FileUploader.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500 dark:text-slate-400 max-w-sm",
                        children: isLoading ? 'Extracting text and identifying table layout locally...' : 'PDF files only. Max 10MB. Secure client-side processing.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/FileUploader.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FileUploader.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FileUploader.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_s(FileUploader, "nd2UFhAEvaNOt2Vm3bxQNQuxWW0=");
_c = FileUploader;
var _c;
__turbopack_context__.k.register(_c, "FileUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DataPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/DataPreview.tsx
'use client';
;
function DataPreview({ data, onDataChange }) {
    const updateCell = (id, key, val)=>{
        const updated = data.map((item)=>{
            if (item.id === id) {
                return {
                    ...item,
                    [key]: val,
                    type: key === 'amount' ? Number(val) < 0 ? 'DEBIT' : 'CREDIT' : item.type
                };
            }
            return item;
        });
        onDataChange(updated);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-x-auto bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-sm text-left whitespace-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-4 font-semibold tracking-wider",
                                children: "Date"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataPreview.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-4 font-semibold tracking-wider",
                                children: "Description / Payee"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataPreview.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-4 font-semibold tracking-wider",
                                children: "Amount"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataPreview.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-4 font-semibold tracking-wider",
                                children: "Type"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataPreview.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataPreview.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/DataPreview.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-slate-100 dark:divide-slate-800/50",
                    children: data.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: `transition-colors hover:bg-indigo-50/40 dark:hover:bg-indigo-900/20 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-slate-50/30 dark:bg-slate-800/20'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: row.date,
                                        onChange: (e)=>updateCell(row.id, 'date', e.target.value),
                                        className: "w-full bg-transparent border-b border-transparent hover:border-slate-300 dark:hover:border-slate-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 rounded-sm px-2 py-1.5 outline-none transition-all text-slate-700 dark:text-slate-300 placeholder:text-slate-400",
                                        placeholder: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataPreview.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DataPreview.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: row.description,
                                        onChange: (e)=>updateCell(row.id, 'description', e.target.value),
                                        className: "w-full min-w-[300px] bg-transparent border-b border-transparent hover:border-slate-300 dark:hover:border-slate-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 rounded-sm px-2 py-1.5 outline-none transition-all text-slate-900 dark:text-slate-100 font-medium",
                                        placeholder: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataPreview.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DataPreview.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: row.amount,
                                        onChange: (e)=>updateCell(row.id, 'amount', parseFloat(e.target.value) || 0),
                                        className: "w-32 bg-transparent border-b border-transparent hover:border-slate-300 dark:hover:border-slate-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 rounded-sm px-2 py-1.5 outline-none transition-all font-mono text-slate-700 dark:text-slate-300 text-right",
                                        placeholder: "0.00"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataPreview.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DataPreview.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${row.type === 'DEBIT' ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800/50' : 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/50'}`,
                                        children: row.type
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataPreview.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DataPreview.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, row.id, true, {
                            fileName: "[project]/src/components/DataPreview.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/DataPreview.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DataPreview.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DataPreview.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = DataPreview;
var _c;
__turbopack_context__.k.register(_c, "DataPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DownloadButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DownloadButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
// src/components/DownloadButtons.tsx
'use client';
;
;
function DownloadButtons({ data }) {
    const exportToCsv = ()=>{
        const headers = 'Date,Description,Amount,Type,Balance\n';
        const rows = data.map((r)=>`"${r.date}","${r.description.replace(/"/g, '""')}",${r.amount},"${r.type}","${r.balance}"`).join('\n');
        const blob = new Blob([
            headers + rows
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        triggerDownload(url, 'statement-export.csv');
    };
    const exportToExcel = ()=>{
        const cleanData = data.map(({ date, description, amount, type, balance })=>({
                Date: date,
                Description: description,
                Amount: amount,
                Type: type,
                Balance: balance
            }));
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(cleanData);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, 'Transactions');
        const excelBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["write"])(workbook, {
            bookType: 'xlsx',
            type: 'array'
        });
        const blob = new Blob([
            excelBuffer
        ], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = URL.createObjectURL(blob);
        triggerDownload(url, 'statement-export.xlsx');
    };
    const exportToJson = ()=>{
        const jsonData = data.map(({ date, description, amount, type, balance })=>({
                date,
                description,
                amount,
                type,
                balance
            }));
        const blob = new Blob([
            JSON.stringify(jsonData, null, 2)
        ], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        triggerDownload(url, 'statement-export.json');
    };
    const triggerDownload = (url, filename)=>{
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-3 mt-4 sm:mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: exportToCsv,
                className: "flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 text-slate-500 dark:text-slate-400",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DownloadButtons.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DownloadButtons.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    "CSV"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DownloadButtons.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: exportToExcel,
                className: "flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 text-indigo-100",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DownloadButtons.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DownloadButtons.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    "Excel"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DownloadButtons.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: exportToJson,
                className: "flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 text-slate-500 dark:text-slate-400",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DownloadButtons.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DownloadButtons.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    "JSON"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DownloadButtons.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DownloadButtons.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = DownloadButtons;
var _c;
__turbopack_context__.k.register(_c, "DownloadButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pdfSetup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// src/lib/pdfSetup.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript)");
;
// Switched from cdnjs to unpkg to support the newly released 6.1.200 version
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.version}/build/pdf.worker.min.mjs`;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pdfParser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractTextFromPdf",
    ()=>extractTextFromPdf
]);
// src/lib/pdfParser.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdfSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdfSetup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript)");
;
;
async function extractTextFromPdf(file, password) {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"]({
        data: arrayBuffer,
        password: password
    });
    const pdf = await loadingTask.promise;
    const allRows = [];
    let totalTextItems = 0;
    let firstPageText = '';
    for(let i = 1; i <= pdf.numPages; i++){
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const items = textContent.items;
        totalTextItems += items.length;
        // Group items by Y-coordinate with a tolerance of ±4px
        const rowMap = new Map();
        items.forEach((item)=>{
            if (!item.str || item.str.trim() === '') return;
            const x = item.transform[4];
            const y = Math.round(item.transform[5]);
            const width = item.width || 0;
            // Find an existing row within tolerance
            let targetY = y;
            for (const existingY of rowMap.keys()){
                if (Math.abs(existingY - y) <= 4) {
                    targetY = existingY;
                    break;
                }
            }
            if (!rowMap.has(targetY)) {
                rowMap.set(targetY, []);
            }
            rowMap.get(targetY).push({
                text: item.str.replace(/\n/g, '').trim(),
                x,
                y: targetY,
                width
            });
        });
        // Sort rows top-to-bottom (higher Y = higher on page in PDF coords)
        const sortedYs = [
            ...rowMap.keys()
        ].sort((a, b)=>b - a);
        const pageRows = sortedYs.map((y)=>{
            const rowItems = rowMap.get(y).sort((a, b)=>a.x - b.x);
            const text = rowItems.map((item)=>item.text).join(' ');
            return {
                items: rowItems,
                text,
                y
            };
        });
        if (i === 1) {
            firstPageText = pageRows.map((r)=>r.text).join('\n');
        }
        allRows.push(...pageRows);
    }
    return {
        rows: allRows,
        isScanned: totalTextItems === 0,
        pageCount: pdf.numPages,
        firstPageText
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/bankFormats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/bankFormats.ts
__turbopack_context__.s([
    "BANK_FORMATS",
    ()=>BANK_FORMATS,
    "detectBank",
    ()=>detectBank
]);
const BANK_FORMATS = [
    {
        id: 'chase',
        name: 'JPMorgan Chase',
        identifiers: [
            'JPMorgan Chase',
            'JPMORGAN CHASE',
            'Chase Bank'
        ],
        dateFormat: 'MM/DD/YYYY',
        columns: [
            'date',
            'description',
            'amount',
            'balance'
        ],
        headerKeywords: [
            'Date',
            'Description',
            'Amount',
            'Balance'
        ],
        separateDebitCredit: false
    },
    {
        id: 'bofa',
        name: 'Bank of America',
        identifiers: [
            'Bank of America',
            'BANK OF AMERICA',
            'BofA'
        ],
        dateFormat: 'MM/DD/YYYY',
        columns: [
            'date',
            'description',
            'amount',
            'balance'
        ],
        headerKeywords: [
            'Date',
            'Description',
            'Amount',
            'Balance'
        ],
        separateDebitCredit: false
    },
    {
        id: 'wellsfargo',
        name: 'Wells Fargo',
        identifiers: [
            'Wells Fargo',
            'WELLS FARGO'
        ],
        dateFormat: 'MM/DD',
        columns: [
            'date',
            'description',
            'debit',
            'credit',
            'balance'
        ],
        headerKeywords: [
            'Date',
            'Description',
            'Deposits',
            'Withdrawals',
            'Balance'
        ],
        separateDebitCredit: true
    },
    {
        id: 'citi',
        name: 'Citibank',
        identifiers: [
            'Citibank',
            'CITIBANK',
            'Citi'
        ],
        dateFormat: 'MM/DD',
        columns: [
            'date',
            'description',
            'debit',
            'credit',
            'balance'
        ],
        headerKeywords: [
            'Date',
            'Description',
            'Debit',
            'Credit',
            'Balance'
        ],
        separateDebitCredit: true
    },
    {
        id: 'scb',
        name: 'Standard Chartered',
        identifiers: [
            'Standard Chartered',
            'STANDARD CHARTERED',
            'SCB'
        ],
        dateFormat: 'DD MMM YY',
        columns: [
            'date',
            'valueDate',
            'description',
            'cheque',
            'deposit',
            'withdrawal',
            'balance'
        ],
        headerKeywords: [
            'Date',
            'Value',
            'Description',
            'Cheque',
            'Deposit',
            'Withdrawal',
            'Balance'
        ],
        separateDebitCredit: true
    },
    {
        id: 'hsbc',
        name: 'HSBC',
        identifiers: [
            'HSBC'
        ],
        dateFormat: 'DD MMM YYYY',
        columns: [
            'date',
            'description',
            'amount',
            'balance'
        ],
        headerKeywords: [
            'Date',
            'Description',
            'Amount',
            'Balance'
        ],
        separateDebitCredit: false
    },
    {
        id: 'sbi',
        name: 'State Bank of India',
        identifiers: [
            'State Bank of India',
            'STATE BANK OF INDIA',
            'SBI'
        ],
        dateFormat: 'DD/MM/YYYY',
        columns: [
            'date',
            'description',
            'cheque',
            'debit',
            'credit',
            'balance'
        ],
        headerKeywords: [
            'Txn Date',
            'Description',
            'Chq',
            'Debit',
            'Credit',
            'Balance'
        ],
        separateDebitCredit: true
    },
    {
        id: 'icici',
        name: 'ICICI Bank',
        identifiers: [
            'ICICI Bank',
            'ICICI BANK'
        ],
        dateFormat: 'DD/MM/YYYY',
        columns: [
            'date',
            'description',
            'debit',
            'credit',
            'balance'
        ],
        headerKeywords: [
            'Date',
            'Transaction',
            'Withdrawal',
            'Deposit',
            'Balance'
        ],
        separateDebitCredit: true
    },
    {
        id: 'hdfc',
        name: 'HDFC Bank',
        identifiers: [
            'HDFC Bank',
            'HDFC BANK'
        ],
        dateFormat: 'DD/MM/YY',
        columns: [
            'date',
            'description',
            'debit',
            'credit',
            'balance'
        ],
        headerKeywords: [
            'Date',
            'Narration',
            'Withdrawal',
            'Deposit',
            'Balance'
        ],
        separateDebitCredit: true
    }
];
function detectBank(firstPageText) {
    const upperText = firstPageText.toUpperCase();
    for (const format of BANK_FORMATS){
        for (const id of format.identifiers){
            if (upperText.includes(id.toUpperCase())) {
                return format;
            }
        }
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/tableExtractor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/tableExtractor.ts
__turbopack_context__.s([
    "parseTransactions",
    ()=>parseTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bankFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/bankFormats.ts [app-client] (ecmascript)");
;
// More comprehensive date and amount patterns
const DATE_REGEX = /^(0?[1-9]|[12]\d|3[01])[\/\-\. ](?:0?[1-9]|1[0-2]|[A-Z]{3,4})[\/\-\. ]?(?:\d{4}|\d{2})?$/i;
const AMOUNT_REGEX = /^-?[\(]?\s*\$?\s*\d{1,3}(?:[,\s]\d{3})*(?:\.\d{2})?[\)]?$/;
function cleanAmount(amountStr) {
    let cleaned = amountStr.replace(/[$,\s]/g, '');
    const isNegative = cleaned.startsWith('-') || cleaned.startsWith('(') && cleaned.endsWith(')');
    cleaned = cleaned.replace(/[\(\)]/g, '');
    const val = parseFloat(cleaned);
    return isNegative ? -Math.abs(val) : val;
}
function parseTransactions(extraction) {
    const transactions = [];
    if (extraction.isScanned || extraction.rows.length === 0) {
        return {
            transactions,
            bank: null
        };
    }
    const bank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bankFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectBank"])(extraction.firstPageText);
    let lastTransaction = null;
    for(let i = 0; i < extraction.rows.length; i++){
        const row = extraction.rows[i];
        const items = row.items;
        if (items.length < 2) {
            if (lastTransaction && items.length === 1 && !DATE_REGEX.test(items[0].text)) {
                // Multi-line description heuristic
                if (items[0].x > 50 && items[0].x < 300) {
                    lastTransaction.description += ' ' + items[0].text;
                    lastTransaction.originalDescription = lastTransaction.description;
                }
            }
            continue;
        }
        const firstText = items[0].text.trim();
        if (DATE_REGEX.test(firstText) || bank && firstText.length >= 5 && firstText.length <= 12 && /\d/.test(firstText)) {
            // Possible transaction
            let date = firstText;
            let description = '';
            let debit = 0, credit = 0, amount = 0;
            let balance = '';
            let type = 'DEBIT';
            const amountItems = items.slice(1).filter((item)=>AMOUNT_REGEX.test(item.text));
            const descItems = items.slice(1).filter((item)=>!AMOUNT_REGEX.test(item.text));
            description = descItems.map((d)=>d.text).join(' ');
            if (amountItems.length > 0) {
                if (bank && bank.separateDebitCredit && amountItems.length >= 1) {
                    // Basic logic: if 2 amounts, likely debit/credit. If 3, debit/credit/balance.
                    // This is a simplified heuristic; real implementation would map by X coordinates.
                    if (amountItems.length >= 2) {
                        const a1 = cleanAmount(amountItems[0].text);
                        const a2 = cleanAmount(amountItems[1].text);
                        if (a1 !== 0) {
                            amount = -Math.abs(a1);
                            type = 'DEBIT';
                            balance = amountItems.length >= 3 ? amountItems[2].text : amountItems[1].text;
                        } else {
                            amount = Math.abs(a2);
                            type = 'CREDIT';
                            balance = amountItems.length >= 3 ? amountItems[2].text : '';
                        }
                    } else {
                        amount = cleanAmount(amountItems[0].text);
                        type = amount < 0 ? 'DEBIT' : 'CREDIT';
                    }
                } else {
                    amount = cleanAmount(amountItems[0].text);
                    type = amount < 0 ? 'DEBIT' : 'CREDIT';
                    if (amountItems.length >= 2) {
                        balance = amountItems[amountItems.length - 1].text;
                    }
                }
                if (description.trim().length > 0) {
                    const tx = {
                        id: `${i}-${Date.now()}`,
                        date,
                        description: description.trim(),
                        originalDescription: description.trim(),
                        amount,
                        type,
                        balance
                    };
                    transactions.push(tx);
                    lastTransaction = tx;
                }
            }
        } else if (lastTransaction) {
            // Multi-line description heuristic
            const descItems = items.filter((item)=>!AMOUNT_REGEX.test(item.text));
            if (descItems.length > 0 && descItems[0].x > 50 && descItems[0].x < 300) {
                lastTransaction.description += ' ' + descItems.map((d)=>d.text).join(' ');
                lastTransaction.originalDescription = lastTransaction.description;
            }
        }
    }
    return {
        transactions,
        bank
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ConverterContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConverterContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FileUploader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DataPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DownloadButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DownloadButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdfParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdfParser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tableExtractor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tableExtractor.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/ConverterContainer.tsx
'use client';
;
;
;
;
;
;
const DEMO_TRANSACTIONS = [
    {
        id: 'demo-1',
        date: '2025-06-01',
        description: 'Direct Deposit - ACME Corp Payroll',
        amount: 3250.00,
        type: 'CREDIT',
        balance: '5,780.42'
    },
    {
        id: 'demo-2',
        date: '2025-06-02',
        description: 'Whole Foods Market #10234',
        amount: -87.32,
        type: 'DEBIT',
        balance: '5,693.10'
    },
    {
        id: 'demo-3',
        date: '2025-06-03',
        description: 'Shell Oil Gas Station',
        amount: -52.18,
        type: 'DEBIT',
        balance: '5,640.92'
    },
    {
        id: 'demo-4',
        date: '2025-06-05',
        description: 'Netflix Monthly Subscription',
        amount: -15.99,
        type: 'DEBIT',
        balance: '5,624.93'
    },
    {
        id: 'demo-5',
        date: '2025-06-06',
        description: 'Venmo Transfer - John D.',
        amount: -200.00,
        type: 'DEBIT',
        balance: '5,424.93'
    },
    {
        id: 'demo-6',
        date: '2025-06-08',
        description: 'Amazon.com Purchase',
        amount: -134.56,
        type: 'DEBIT',
        balance: '5,290.37'
    },
    {
        id: 'demo-7',
        date: '2025-06-10',
        description: 'Starbucks Coffee',
        amount: -6.45,
        type: 'DEBIT',
        balance: '5,283.92'
    },
    {
        id: 'demo-8',
        date: '2025-06-12',
        description: 'Refund - Return Order #98712',
        amount: 49.99,
        type: 'CREDIT',
        balance: '5,333.91'
    },
    {
        id: 'demo-9',
        date: '2025-06-15',
        description: 'Electric Company - Monthly Bill',
        amount: -142.30,
        type: 'DEBIT',
        balance: '5,191.61'
    },
    {
        id: 'demo-10',
        date: '2025-06-15',
        description: 'Direct Deposit - ACME Corp Payroll',
        amount: 3250.00,
        type: 'CREDIT',
        balance: '8,441.61'
    }
];
function ConverterContainer() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bankInfo, setBankInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDemo, setIsDemo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLoadDemo = ()=>{
        setErrorMsg(null);
        setBankInfo(null);
        setIsDemo(true);
        setData(DEMO_TRANSACTIONS);
    };
    const handleFileProcessing = async (file, password)=>{
        setIsLoading(true);
        setErrorMsg(null);
        setData([]);
        setBankInfo(null);
        setIsDemo(false);
        try {
            const extraction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdfParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractTextFromPdf"])(file, password);
            if (extraction.isScanned) {
                setErrorMsg("This PDF appears to be a scanned image. We can only process text-based PDFs — the kind you download directly from your bank's website.");
                setIsLoading(false);
                return;
            }
            const { transactions, bank } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tableExtractor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTransactions"])(extraction);
            if (transactions.length === 0) {
                setErrorMsg("We opened your PDF successfully but couldn't find any transactions. This bank's layout may not be supported yet.");
            } else {
                setBankInfo(bank);
                setData(transactions);
            }
        } catch (err) {
            if (err.name === 'PasswordException') {
                const userPassword = prompt(password ? "That password didn't work. Please try again:" : "This statement is password-protected. Please enter the password:");
                if (userPassword !== null) {
                    handleFileProcessing(file, userPassword);
                    return;
                }
            } else {
                console.error("PDF Parsing Error:", err);
                setErrorMsg("Something went wrong while reading this PDF. It may be corrupted or in an unsupported format.");
            }
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl mx-auto px-4 py-16 sm:py-24 relative z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12 sm:mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-full border border-indigo-100 dark:border-indigo-800/50 shadow-sm",
                        children: "✨ 100% Client-Side Processing"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConverterContainer.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white",
                        children: [
                            "Bank Statement to CSV",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 90,
                                columnNumber: 42
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500",
                                children: "Made Simple"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConverterContainer.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed",
                        children: [
                            "Convert your PDF statements to structured spreadsheets instantly.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800 dark:text-slate-200",
                                children: " Your files never leave your browser."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConverterContainer.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConverterContainer.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl shadow-indigo-100/20 dark:shadow-indigo-900/20 rounded-3xl p-6 sm:p-10 mb-8 overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white/40 to-white/0 dark:from-white/5 dark:to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConverterContainer.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onFileSelect: handleFileProcessing,
                                isLoading: isLoading,
                                onError: (msg)=>setErrorMsg(msg)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, this),
                            !isLoading && data.length === 0 && !errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLoadDemo,
                                    className: "text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline underline-offset-4 decoration-indigo-300 dark:decoration-indigo-700 hover:decoration-indigo-500 transition-colors",
                                    children: "Or try with a demo statement →"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ConverterContainer.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConverterContainer.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConverterContainer.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            errorMsg && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-in fade-in slide-in-from-bottom-4 duration-500 mt-6 p-5 bg-red-50/90 dark:bg-red-950/50 backdrop-blur-md border border-red-200 dark:border-red-900/50 rounded-2xl shadow-lg shadow-red-100/20 flex items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-red-100 dark:bg-red-900/50 rounded-full shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-red-600 dark:text-red-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 121,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConverterContainer.tsx",
                            lineNumber: 120,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConverterContainer.tsx",
                        lineNumber: 119,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-red-800 dark:text-red-300 mb-1",
                                children: "Something went wrong"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 125,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-700 dark:text-red-400/90 text-sm",
                                children: errorMsg
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConverterContainer.tsx",
                        lineNumber: 124,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConverterContainer.tsx",
                lineNumber: 118,
                columnNumber: 17
            }, this),
            data.length > 0 && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-2xl shadow-sm mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                                lineNumber: 137,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ConverterContainer.tsx",
                                            lineNumber: 136,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConverterContainer.tsx",
                                        lineNumber: 135,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-slate-900 dark:text-white",
                                                children: isDemo ? 'Demo Data Loaded' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Format Detected: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-indigo-600 dark:text-indigo-400",
                                                            children: bankInfo ? bankInfo.name : 'Generic'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ConverterContainer.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 87
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                                lineNumber: 141,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500 dark:text-slate-400",
                                                children: isDemo ? 'Edit the table below, then download in any format.' : `Successfully extracted ${data.length} transactions`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                                lineNumber: 144,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ConverterContainer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 134,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DownloadButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConverterContainer.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConverterContainer.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-xl overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: data,
                            onDataChange: setData
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConverterContainer.tsx",
                            lineNumber: 153,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConverterContainer.tsx",
                        lineNumber: 152,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConverterContainer.tsx",
                lineNumber: 132,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ConverterContainer.tsx",
        lineNumber: 84,
        columnNumber: 9
    }, this);
}
_s(ConverterContainer, "wFmcq6saUVicrzG2WbIOtZ0EdrE=");
_c = ConverterContainer;
var _c;
__turbopack_context__.k.register(_c, "ConverterContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ConverterContainer.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ConverterContainer.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_0-0ovj_._.js.map