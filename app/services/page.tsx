import Link from "next/link";
export const metadata = {
    title: "Услуги",
    description: "Разработка кастомного ПО, автоматизация бизнес-процессов, аудит и поддержка.",
};

const services = [
    {
        title: "Разработка кастомного ПО",
        text: "Создаём программные решения под конкретные задачи вашего бизнеса. Без лишнего функционала и с фокусом на удобство использования и дальнейшее развитие.",
    },
    {
        title: "Автоматизация бизнес-процессов",
        text: "Анализируем рутинные операции и автоматизируем их. Связываем разные системы между собой, чтобы данные не терялись и процессы шли быстрее.",
    },
    {
        title: "Аудит процессов",
        text: "Изучаем, как сейчас устроены процессы, где возникают задержки, ошибки и лишние действия. Даём понятные рекомендации, что можно улучшить.",
    },
    {
        title: "Поддержка и развитие",
        text: "После запуска остаёмся на связи: исправляем, дорабатываем, оптимизируем и помогаем масштабировать решение по мере роста бизнеса.",
    },
];

export default function ServicesPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">Услуги</h1>
            <p className="mt-6 text-lg text-slate-600">
                Помогаем бизнесу работать эффективнее за счёт разработки, автоматизации и грамотной поддержки систем.
            </p>

            <div className="mt-16 space-y-12">
                {services.map((service) => (
                    <div key={service.title} className="border-b border-slate-200 pb-12 last:border-0">
                        <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
                        <p className="mt-4 text-slate-600 leading-relaxed">{service.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16">
                <Link
                    href="/contacts"
                    className="inline-flex rounded-lg bg-slate-900 px-8 py-4 text-base font-medium text-white hover:bg-slate-800"
                >
                    Обсудить проект
                </Link>
            </div>
        </div>
    );
}