import SolutionForm from "@/components/admin/SolutionForm";
import Link from "next/link";

export default function NewSolutionPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <Link href="/admin/content/solutions" className="text-[#00A3FF] hover:underline text-sm mb-2 block">
                    ← Back to Solutions
                </Link>
                <h1 className="text-3xl font-bold">Add New Solution</h1>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl p-8">
                <SolutionForm />
            </div>
        </div>
    );
}
