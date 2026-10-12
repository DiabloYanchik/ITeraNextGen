import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getRequests } from "@/lib/actions";
import AdminLogin from "./AdminLogin";
import RequestsList from "./RequestsList";

export default async function AdminPage() {
    const cookieStore = await cookies();
    const isAuth = cookieStore.get("admin_auth")?.value === "true";

    if (!isAuth) {
        return <AdminLogin />;
    }

    const requests = await getRequests();

    return (
        <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold text-slate-900">Заявки</h1>
                <form action="/api/admin/logout" method="POST">
                    <button className="text-sm text-slate-600 hover:text-slate-900">Выйти</button>
                </form>
            </div>
            <RequestsList requests={requests} />
        </div>
    );
}