"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            router.refresh();
        } else {
            setError("Неверный пароль");
        }
    }

    return (
        <div className="mx-auto flex min-h-[60vh] max-w-md items-center px-6">
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <h1 className="text-2xl font-semibold text-slate-900">Вход в админку</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3"
                    required
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-slate-900 py-3 text-white hover:bg-slate-800"
                >
                    Войти
                </button>
            </form>
        </div>
    );
}