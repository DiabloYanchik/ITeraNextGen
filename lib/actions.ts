
"use server";

import { writeFile, readFile } from "fs/promises";
import path from "path";

const REQUESTS_FILE = path.join(process.cwd(), "data", "requests.json");

import { mkdir } from "fs/promises";

async function ensureFile() {
    const dir = path.dirname(REQUESTS_FILE);
    try {
        await mkdir(dir, { recursive: true });
    } catch {}
    try {
        await readFile(REQUESTS_FILE, "utf-8");
    } catch {
        await writeFile(REQUESTS_FILE, "[]", "utf-8");
    }
}

export async function sendContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const contact = formData.get("contact") as string;
    const message = formData.get("message") as string;

    if (!name || !contact || !message) {
        return { success: false, error: "Заполните обязательные поля" };
    }

    const newRequest = {
        id: Date.now().toString(),
        name,
        company: company || "",
        contact,
        message,
        createdAt: new Date().toISOString(),
    };

    try {
        await ensureFile();
        const raw = await readFile(REQUESTS_FILE, "utf-8");
        const requests = JSON.parse(raw);
        requests.unshift(newRequest);
        await writeFile(REQUESTS_FILE, JSON.stringify(requests, null, 2), "utf-8");

        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Не удалось сохранить заявку" };
    }
}

export async function getRequests() {
    try {
        await ensureFile();
        const raw = await readFile(REQUESTS_FILE, "utf-8");
        return JSON.parse(raw);
    } catch {
        return [];
    }
}