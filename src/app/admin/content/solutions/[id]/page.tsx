import prisma from "@/lib/prisma";
import SolutionForm from "@/components/admin/SolutionForm";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditSolutionPage({
    params,
}: {
    params: { id: string };
}) {
    const solution = await prisma.solution.findUnique({
        where: { id: params.id },
    });

    if (!solution) {
        notFound();
    }

    return (
        <div className="p-8">
            <div className="mb-8">
                <Link href="/admin/content/solutions" className="text-[#00A3FF] hover:underline text-sm mb-2 block">
                    ← Back to Solutions
                </Link>
                <h1 className="text-3xl font-bold">Edit Solution</h1>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl p-8">
                <SolutionForm solution={solution} />
            </div>
        </div>
    );
}
