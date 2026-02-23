"use client";

import { createService, updateService } from "@/lib/actions/services";
import { useTransition } from "react";

interface ServiceFormProps {
    service?: any; // Using any to avoid types issue for now
}

export default function ServiceForm({ service }: ServiceFormProps) {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            if (service) {
                await updateService(service.id, formData);
            } else {
                await createService(formData);
            }
        });
    };

    return (
        <form action={handleSubmit} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Icon (Emoji/SVG)</label>
                    <input
                        name="icon"
                        defaultValue={service?.icon}
                        required
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                        placeholder="e.g. ⚡"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Display Order</label>
                    <input
                        name="order"
                        type="number"
                        defaultValue={service?.order ?? 0}
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                <input
                    name="title"
                    defaultValue={service?.title}
                    required
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    placeholder="e.g. High-Volume Execution"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                <textarea
                    name="desc"
                    defaultValue={service?.desc}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF] resize-none"
                    placeholder="Enter service description..."
                />
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-6 py-2 bg-[#00A3FF] hover:bg-[#0082CC] text-white rounded-lg transition-colors font-medium disabled:opacity-50"
                >
                    {isPending ? "Saving..." : service ? "Update Service" : "Create Service"}
                </button>
            </div>
        </form>
    );
}
