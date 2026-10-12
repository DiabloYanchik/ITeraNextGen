import Link from "next/link";
export const metadata = {
    title: "О компании",
    description: "ITeraNextGen — разработка и автоматизация с фокусом на результат.",
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">О компании</h1>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                    ITeraNextGen помогает компаниям разрабатывать программные решения и автоматизировать процессы, которые реально влияют на эффективность работы.
                </p>
                <p>
                    Мы работаем с фокусом на результат: сначала понимаем задачу и текущую ситуацию, затем предлагаем понятный подход и реализуем его. Без лишней сложности и с вниманием к деталям.
                </p>
                <p>
                    Основной акцент — на качестве исполнения, прозрачности процесса и долгосрочной поддержке запущенных решений.
                </p>
            </div>
            <div className="mt-12">
                <Link href="/contacts" className="inline-flex rounded-lg bg-slate-900 px-8 py-4 text-base font-medium text-white hover:bg-slate-800">
                    Обсудить проект
                </Link>
            </div>
        </div>
    );
}