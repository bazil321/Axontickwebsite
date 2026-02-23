import prisma from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteTrustLogo } from "@/lib/actions/trust-logos";

export default async function TrustLogosPage() {
    const logos = await prisma.trustLogo.findMany({
        orderBy: { order: "asc" },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Trust Logos</h1>
                <Link
                    href="/admin/content/trust-logos/new"
                    className="px-4 py-2 bg-[#00A3FF] hover:bg-[#0082CC] rounded-lg transition-colors text-sm font-medium"
                >
                    Add New Logo
                </Link>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden max-w-4xl">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#222222] bg-[#1a1a1a]">
                            <th className="px-6 py-4 text-gray-400 font-medium">Company Name</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Order</th>
                            <th className="px-6 py-4 text-gray-400 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222222]">
                        {logos.map((logo) => (
                            <tr key={logo.id} className="hover:bg-[#161616] transition-colors">
                                <td className="px-6 py-4 font-bold text-white">{logo.name}</td>
                                <td className="px-6 py-4 text-gray-400">{logo.order}</td>
                                <td className="px-6 py-4 text-right space-x-3">
                                    <Link
                                        href={`/admin/content/trust-logos/${logo.id}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Edit
                                    </Link>
                                    <DeleteButton id={logo.id} onDelete={deleteTrustLogo} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
