import prisma from "@/lib/prisma";
import ProjectForm from "@/components/admin/ProjectForm";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditProjectPage({
    params,
}: {
    params: { id: string };
}) {
    const project = await prisma.project.findUnique({
        where: { id: params.id },
    });

    if (!project) {
        notFound();
    }

    return (
        <div className="p-8">
            <div className="mb-8">
                <Link href="/admin/content/portfolio" className="text-[#00A3FF] hover:underline text-sm mb-2 block">
                    ← Back to Portfolio
                </Link>
                <h1 className="text-3xl font-bold">Edit Project</h1>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl p-8">
                <ProjectForm project={project} />
            </div>
        </div>
    );
}
