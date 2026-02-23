import prisma from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteStat } from "@/lib/actions/stats";

export default async function StatsPage() {
    const stats = await prisma.stat.findMany({
        orderBy: { order: "asc" },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Stats</h1>
                <Link
                    href="/admin/content/stats/new"
                    className="px-4 py-2 bg-[#00A3FF] hover:bg-[#0082CC] rounded-lg transition-colors text-sm font-medium"
                >
                    Add New Stat
                </Link>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#222222] bg-[#1a1a1a]">
                            <th className="px-6 py-4 text-gray-400 font-medium">Number</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Suffix</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Label</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Order</th>
                            <th className="px-6 py-4 text-gray-400 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222222]">
                        {stats.map((stat) => (
                            <tr key={stat.id} className="hover:bg-[#161616] transition-colors">
                                <td className="px-6 py-4 font-bold text-[#00A3FF]">{stat.number}</td>
                                <td className="px-6 py-4 text-gray-300">{stat.suffix}</td>
                                <td className="px-6 py-4 text-gray-300">{stat.label}</td>
                                <td className="px-6 py-4 text-gray-400">{stat.order}</td>
                                <td className="px-6 py-4 text-right space-x-3">
                                    <Link
                                        href={`/admin/content/stats/${stat.id}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Edit
                                    </Link>
                                    <DeleteButton id={stat.id} onDelete={deleteStat} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
