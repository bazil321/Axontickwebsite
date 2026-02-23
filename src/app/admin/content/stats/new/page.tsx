import StatForm from "@/components/admin/StatForm";
import Link from "next/link";

export default function NewStatPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <Link href="/admin/content/stats" className="text-[#00A3FF] hover:underline text-sm mb-2 block">
                    ← Back to Stats
                </Link>
                <h1 className="text-3xl font-bold">Add New Stat</h1>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl p-8">
                <StatForm />
            </div>
        </div>
    );
}
