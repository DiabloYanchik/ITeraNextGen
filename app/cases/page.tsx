import Link from "next/link";
export const metadata = {
    title: "Кейсы",
    description: "Примеры реализованных проектов ITeraNextGen.",
};

export default function CasesPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">Кейсы</h1>
            <p className="mt-6 text-lg text-slate-600">
                Раздел пополняется. Здесь будут примеры реализованных проектов.
            </p>
            <div className="mt-12 rounded-xl border border-dashed border-slate-300 p-12 text-center">
                <p className="text-slate-500">Кейсы скоро появятся</p>
            </div>
            <div className="mt-12">
                <Link href="/contacts" className="inline-flex rounded-lg bg-slate-900 px-8 py-4 text-base font-medium text-white hover:bg-slate-800">
                    Обсудить ваш проект
                </Link>
            </div>
        </div>
    );
}