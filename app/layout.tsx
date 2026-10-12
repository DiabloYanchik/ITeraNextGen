import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: {
        default: "ITeraNextGen — Разработка ПО и автоматизация бизнес-процессов",
        template: "%s | ITeraNextGen",
    },
    description:
        "Разработка кастомного ПО, автоматизация бизнес-процессов, аудит процессов и поддержка. Помогаем бизнесу работать эффективнее.",
    keywords: [
        "разработка ПО",
        "автоматизация бизнес-процессов",
        "аудит процессов",
        "кастомное программное обеспечение",
        "ITeraNextGen",
    ],
    openGraph: {
        title: "ITeraNextGen — Разработка и автоматизация",
        description: "Кастомное ПО, автоматизация и поддержка для бизнеса.",
        type: "website",
        locale: "ru_RU",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </body>
        </html>
    );
}