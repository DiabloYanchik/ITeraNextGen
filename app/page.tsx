import Link from "next/link";

const services = [
    {
        title: "Разработка кастомного ПО",
        desc: "Создаём решения под ваши процессы. Без лишнего функционала и с возможностью дальнейшего развития.",
    },
    {
        title: "Автоматизация процессов",
        desc: "Убираем рутину, связываем системы и сокращаем время на выполнение задач.",
    },
    {
        title: "Аудит процессов",
        desc: "Находим узкие места, лишние действия и точки, где можно повысить эффективность.",
    },
    {
        title: "Поддержка и развитие",
        desc: "Сопровождаем решения после запуска: исправляем, улучшаем и масштабируем.",
    },
];

const steps = [
    { num: "01", title: "Диагностика", desc: "Разбираемся в задаче, текущих процессах и ограничениях." },
    { num: "02", title: "План и предложение", desc: "Формируем понятный подход, сроки и ожидаемый результат." },
    { num: "03", title: "Реализация", desc: "Разрабатываем, автоматизируем и интегрируем." },
    { num: "04", title: "Запуск и поддержка", desc: "Запускаем в работу и остаёмся на связи." },
];

export default function HomePage() {
    return (
        <>
            {/* Hero */}
            <section className="border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-6 py-20 md:py-32 lg:py-40">
                    <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                        Разрабатываем и автоматизируем то, что двигает бизнес вперёд
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                        Кастомное ПО, автоматизация бизнес-процессов, аудит и поддержка.
                        Чёткий результат без лишней сложности.
                    </p>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <Link
                            href="/contacts"
                            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-4 text-base font-medium text-white transition hover:bg-slate-800"
                        >
                            Обсудить проект
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-4 text-base font-medium text-slate-800 transition hover:bg-slate-50"
                        >
                            Смотреть услуги
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Услуги</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Полный цикл работ — от понимания задачи до работающего решения и поддержки.
                    </p>
                </div>
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((item) => (
                        <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="text-lg font-medium text-slate-900">{item.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <Link href="/services" className="text-sm font-medium text-slate-900 underline-offset-4 hover:underline">
                        Подробнее об услугах →
                    </Link>
                </div>
            </section>

            {/* Process */}
            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Как мы работаем</h2>
                    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div key={step.num}>
                                <div className="text-sm font-medium text-slate-400">{step.num}</div>
                                <h3 className="mt-2 text-lg font-medium text-slate-900">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="border-t border-slate-200">
                <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                        Готовы обсудить ваш проект?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
                        Расскажите о задаче — предложим подход и следующие шаги.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/contacts"
                            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-4 text-base font-medium text-white transition hover:bg-slate-800"
                        >
                            Обсудить проект
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}