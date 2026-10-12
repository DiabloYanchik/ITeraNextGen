"use client";

import { useState } from "react";
import { sendContactForm } from "@/lib/actions";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [error, setError] = useState("");

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        setError("");

        const result = await sendContactForm(formData);

        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
            setError(result.error || "Произошла ошибка");
        }
    }

    if (status === "success") {
        return (
            <div className="mt-12 rounded-xl border border-green-200 bg-green-50 p-6 text-green-800">
                Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </div>
        );
    }

    return (
        <form action={handleSubmit} className="mt-12 space-y-6">
            <div>
                <label className="block text-sm font-medium text-slate-700">Имя *</label>
                <input
                    name="name"
                    required
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-500 focus:outline-none"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700">Компания</label>
                <input
                    name="company"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-500 focus:outline-none"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700">Телефон или Telegram *</label>
                <input
                    name="contact"
                    required
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-500 focus:outline-none"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700">Сообщение *</label>
                <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-500 focus:outline-none"
                />
            </div>

            {status === "error" && <p className="text-sm text-red-600">{error}</p>}

            <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-lg bg-slate-900 px-8 py-4 text-base font-medium text-white hover:bg-slate-800 disabled:opacity-60"
            >
                {status === "loading" ? "Отправка..." : "Обсудить проект"}
            </button>
        </form>
    );
}