import { auth, signOut } from "@/auth";
import Link from "next/link";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    return (
        <div className="flex min-h-screen bg-[#070707] text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-[#111111] border-r border-[#222222] flex flex-col">
                <div className="p-6 border-b border-[#222222]">
                    <h1 className="text-xl font-bold text-[#00A3FF]">Axontick CMS</h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin" className="block px-4 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                        Dashboard
                    </Link>
                    <Link href="/admin/content/stats" className="block px-4 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                        Stats
                    </Link>
                    <Link href="/admin/content/trust-logos" className="block px-4 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                        Trust Logos
                    </Link>
                    <Link href="/admin/content/services" className="block px-4 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                        Services
                    </Link>
                    <Link href="/admin/content/portfolio" className="block px-4 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                        Portfolio
                    </Link>
                    <Link href="/admin/content/solutions" className="block px-4 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                        Solutions
                    </Link>
                    <Link href="/admin/content/testimonials" className="block px-4 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                        Testimonials
                    </Link>
                    <Link href="/admin/content/faqs" className="block px-4 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                        FAQs
                    </Link>
                </nav>

                <div className="p-4 border-t border-[#222222]">
                    <div className="mb-4 text-sm text-gray-400">
                        {session?.user?.email}
                    </div>
                    <form
                        action={async () => {
                            "use server";
                            await signOut();
                        }}
                    >
                        <button className="w-full text-left px-4 py-2 text-red-400 hover:bg-[#1a1a1a] rounded-lg transition-colors">
                            Logout
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}
