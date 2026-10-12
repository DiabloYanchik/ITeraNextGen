"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
                    ITeraNextGen
                </Link>

                <nav className="hidden items-center gap-10 md:flex">
                    <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        Услуги
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        О компании
                    </Link>
                    <Link href="/cases" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        Кейсы
                    </Link>
                    <Link href="/contacts" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        Контакты
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="/contacts"
                        className="hidden rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 md:inline-flex"
                    >
                        Обсудить проект
                    </Link>

                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
                        aria-label="Меню"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <div className="border-t border-slate-200 bg-white md:hidden">
                    <div className="flex flex-col gap-1 px-6 py-4">
                        <Link href="/services" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-slate-800">
                            Услуги
                        </Link>
                        <Link href="/about" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-slate-800">
                            О компании
                        </Link>
                        <Link href="/cases" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-slate-800">
                            Кейсы
                        </Link>
                        <Link href="/contacts" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-slate-800">
                            Контакты
                        </Link>
                        <Link
                            href="/contacts"
                            onClick={() => setOpen(false)}
                            className="mt-2 rounded-lg bg-slate-900 py-3 text-center text-sm font-medium text-white"
                        >
                            Обсудить проект
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}