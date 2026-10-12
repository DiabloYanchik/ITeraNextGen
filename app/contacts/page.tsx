import ContactForm from "./ContactForm";

export const metadata = {
    title: "Контакты",
    description: "Обсудить проект с ITeraNextGen. Форма обратной связи, Telegram, WhatsApp.",
};

export default function ContactsPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">Контакты</h1>
            <p className="mt-6 text-lg text-slate-600">
                Напишите о задаче — ответим и предложим следующие шаги.
            </p>

            <ContactForm />

            <div className="mt-12 flex gap-6 text-sm">
                <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
                    Telegram
                </a>
                <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
                    WhatsApp
                </a>
            </div>
        </div>
    );
}