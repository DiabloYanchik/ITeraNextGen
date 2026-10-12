import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <div className="text-lg font-semibold text-slate-900">ITeraNextGen</div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            Разработка и автоматизация, которые работают на результат.
                        </p>
                    </div>

                    <div>
                        <div className="text-sm font-semibold text-slate-900">Навигация</div>
                        <div className="mt-4 flex flex-col gap-2.5 text-sm text-slate-600">
                            <Link href="/services" className="hover:text-slate-900">Услуги</Link>
                            <Link href="/about" className="hover:text-slate-900">О компании</Link>
                            <Link href="/cases" className="hover:text-slate-900">Кейсы</Link>
                            <Link href="/contacts" className="hover:text-slate-900">Контакты</Link>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-semibold text-slate-900">Контакты</div>
                        <div className="mt-4 flex flex-col gap-2.5 text-sm text-slate-600">
                            <a href="https://t.me/ВАШ_НИК" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
                                Telegram
                            </a>
                            <a href="https://wa.me/ВАШ_НОМЕР" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
                    © 2026 ITeraNextGen. Все права защищены.
                </div>
            </div>
        </footer>
    );
}