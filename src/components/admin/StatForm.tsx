"use client";

import { createStat, updateStat } from "@/lib/actions/stats";
import { Stat } from "@prisma/client";
import { useTransition } from "react";

interface StatFormProps {
    stat?: Stat;
}

export default function StatForm({ stat }: StatFormProps) {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            if (stat) {
                await updateStat(stat.id, formData);
            } else {
                await createStat(formData);
            }
        });
    };

    return (
        <form action={handleSubmit} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Number</label>
                    <input
                        name="number"
                        defaultValue={stat?.number}
                        required
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                        placeholder="e.g. 50"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Suffix</label>
                    <input
                        name="suffix"
                        defaultValue={stat?.suffix}
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                        placeholder="e.g. +"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Label</label>
                <input
                    name="label"
                    defaultValue={stat?.label}
                    required
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    placeholder="e.g. Projects Completed"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Display Order</label>
                <input
                    name="order"
                    type="number"
                    defaultValue={stat?.order ?? 0}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                />
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-6 py-2 bg-[#00A3FF] hover:bg-[#0082CC] text-white rounded-lg transition-colors font-medium disabled:opacity-50"
                >
                    {isPending ? "Saving..." : stat ? "Update Stat" : "Create Stat"}
                </button>
            </div>
        </form>
    );
}
