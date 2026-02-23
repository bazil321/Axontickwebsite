import prisma from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteProject } from "@/lib/actions/projects";
import { Project } from "@prisma/client";

export default async function PortfolioPage() {
    const projects = await prisma.project.findMany({
        orderBy: { order: "asc" },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Portfolio</h1>
                <Link
                    href="/admin/content/portfolio/new"
                    className="px-4 py-2 bg-[#00A3FF] hover:bg-[#0082CC] rounded-lg transition-colors text-sm font-medium"
                >
                    Add New Project
                </Link>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#222222] bg-[#1a1a1a]">
                            <th className="px-6 py-4 text-gray-400 font-medium w-16 text-center">Icon</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Project Name</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Category / Tag</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Order</th>
                            <th className="px-6 py-4 text-gray-400 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222222]">
                        {projects.map((project: Project) => (
                            <tr key={project.id} className="hover:bg-[#161616] transition-colors">
                                <td className="px-6 py-4 text-2xl text-center">{project.emoji}</td>
                                <td className="px-6 py-4">
                                    <div className="font-bold text-white">{project.name}</div>
                                    <div className="text-xs text-gray-500 truncate max-w-xs">{project.desc}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-xs px-2 py-1 bg-[#1a1a1a] border border-[#333333] rounded text-gray-400 uppercase tracking-wider mr-2">
                                        {project.cat}
                                    </span>
                                    <span className="text-sm text-gray-400">{project.tag}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-400">{project.order}</td>
                                <td className="px-6 py-4 text-right space-x-3">
                                    <Link
                                        href={`/admin/content/portfolio/${project.id}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Edit
                                    </Link>
                                    <DeleteButton id={project.id} onDelete={deleteProject} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
