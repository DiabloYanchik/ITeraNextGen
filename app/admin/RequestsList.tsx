type Request = {
    id: string;
    name: string;
    company: string;
    contact: string;
    message: string;
    createdAt: string;
};

export default function RequestsList({ requests }: { requests: Request[] }) {
    if (requests.length === 0) {
        return <p className="mt-8 text-slate-500">Заявок пока нет</p>;
    }

    return (
        <div className="mt-8 space-y-4">
            {requests.map((req) => (
                <div key={req.id} className="rounded-xl border border-slate-200 p-5">
                    <div className="flex justify-between text-sm text-slate-500">
                        <span>{new Date(req.createdAt).toLocaleString("ru-RU")}</span>
                    </div>
                    <div className="mt-2 font-medium text-slate-900">{req.name}</div>
                    {req.company && <div className="text-sm text-slate-600">{req.company}</div>}
                    <div className="mt-1 text-sm text-slate-700">{req.contact}</div>
                    <p className="mt-3 text-slate-700 whitespace-pre-wrap">{req.message}</p>
                </div>
            ))}
        </div>
    );
}