import prisma from "@/lib/prisma";
import TrustLogoForm from "@/components/admin/TrustLogoForm";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditTrustLogoPage({
    params,
}: {
    params: { id: string };
}) {
    const logo = await prisma.trustLogo.findUnique({
        where: { id: params.id },
    });

    if (!logo) {
        notFound();
    }

    return (
        <div className="p-8">
            <div className="mb-8">
                <Link href="/admin/content/trust-logos" className="text-[#00A3FF] hover:underline text-sm mb-2 block">
                    ← Back to Trust Logos
                </Link>
                <h1 className="text-3xl font-bold">Edit Trust Logo</h1>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl p-8">
                <TrustLogoForm logo={logo} />
            </div>
        </div>
    );
}
