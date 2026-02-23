import prisma from "@/lib/prisma";
import StatForm from "@/components/admin/StatForm";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditStatPage({
    params,
}: {
    params: { id: string };
}) {
    const stat = await prisma.stat.findUnique({
        where: { id: params.id },
    });

    if (!stat) {
        notFound();
    }

    return (
        <div className="p-8">
            <div className="mb-8">
                <Link href="/admin/content/stats" className="text-[#00A3FF] hover:underline text-sm mb-2 block">
                    ← Back to Stats
                </Link>
                <h1 className="text-3xl font-bold">Edit Stat</h1>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl p-8">
                <StatForm stat={stat} />
            </div>
        </div>
    );
}
