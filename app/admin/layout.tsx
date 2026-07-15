import Link from "next/link";
import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/auth";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const admin = await isAdmin();

    if (!admin) {
        redirect("/");
    }

    return (
        <main className="ml-72 min-h-screen bg-[#050505] text-white">
            <div className="flex">
                <aside className="w-64 border-r border-neutral-800 p-8">
                    <h2 className="text-2xl font-bold">
                        Admin
                    </h2>

                    <nav className="mt-10 space-y-2">

                        <Link
                            href="/admin"
                            className="block rounded-xl px-4 py-3 hover:bg-neutral-900"
                        >
                            Dashboard
                        </Link>


                        <Link
                            href="/admin/casinos"
                            className="block rounded-xl px-4 py-3 hover:bg-neutral-900"
                        >
                            Casinos
                        </Link>


                        <Link
                            href="/admin/casinos/new"
                            className="block rounded-xl px-4 py-3 hover:bg-neutral-900"
                        >
                            Add Casino
                        </Link>


                        <Link
                            href="/admin/analytics"
                            className="block rounded-xl px-4 py-3 hover:bg-neutral-900"
                        >
                            Analytics
                        </Link>

                    </nav>
                </aside>

                <section className="flex-1 p-10">
                    {children}
                </section>
            </div>
        </main>
    );
}