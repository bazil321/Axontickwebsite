import prisma from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteSolution } from "@/lib/actions/solutions";

export default async function SolutionsPage() {
    const solutions = await prisma.solution.findMany({
        orderBy: { order: "asc" },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Solutions</h1>
                <Link
                    href="/admin/content/solutions/new"
                    className="px-4 py-2 bg-[#00A3FF] hover:bg-[#0082CC] rounded-lg transition-colors text-sm font-medium"
                >
                    Add New Solution
                </Link>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#222222] bg-[#1a1a1a]">
                            <th className="px-6 py-4 text-gray-400 font-medium w-16 text-center">Icon</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Title</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Slug</th>
                            <th className="px-6 py-4 text-gray-400 font-medium w-20 text-center">Order</th>
                            <th className="px-6 py-4 text-gray-400 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222222]">
                        {solutions.map((solution) => (
                            <tr key={solution.id} className="hover:bg-[#161616] transition-colors">
                                <td className="px-6 py-4 text-2xl text-center">{solution.icon}</td>
                                <td className="px-6 py-4 font-bold text-white">{solution.title}</td>
                                <td className="px-6 py-4 text-gray-400 text-sm font-mono">{solution.slug}</td>
                                <td className="px-6 py-4 text-center text-gray-400">{solution.order}</td>
                                <td className="px-6 py-4 text-right space-x-3">
                                    <Link
                                        href={`/admin/content/solutions/${solution.id}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Edit
                                    </Link>
                                    <DeleteButton id={solution.id} onDelete={deleteSolution} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
