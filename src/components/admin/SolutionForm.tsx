"use client";

import { createSolution, updateSolution } from "@/lib/actions/solutions";
import { useTransition } from "react";

interface SolutionFormProps {
    solution?: any;
}

export default function SolutionForm({ solution }: SolutionFormProps) {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            if (solution) {
                await updateSolution(solution.id, formData);
            } else {
                await createSolution(formData);
            }
        });
    };

    return (
        <form action={handleSubmit} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Slug (URL path)</label>
                    <input
                        name="slug"
                        defaultValue={solution?.slug}
                        required
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                        placeholder="e.g. chatbot"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Icon (Emoji)</label>
                    <input
                        name="icon"
                        defaultValue={solution?.icon}
                        required
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                        placeholder="e.g. 💬"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                    <input
                        name="title"
                        defaultValue={solution?.title}
                        required
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                        placeholder="e.g. Omnichannel Chatbots"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Display Order</label>
                    <input
                        name="order"
                        type="number"
                        defaultValue={solution?.order ?? 0}
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                <textarea
                    name="desc"
                    defaultValue={solution?.desc}
                    required
                    rows={3}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF] resize-none"
                    placeholder="Enter short description..."
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Features (Comma separated)</label>
                <input
                    name="features"
                    defaultValue={solution?.features}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    placeholder="Feature 1, Feature 2, Feature 3"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Link</label>
                <input
                    name="link"
                    defaultValue={solution?.link}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    placeholder="e.g. /services/chatbot"
                />
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-6 py-2 bg-[#00A3FF] hover:bg-[#0082CC] text-white rounded-lg transition-colors font-medium disabled:opacity-50"
                >
                    {isPending ? "Saving..." : solution ? "Update Solution" : "Create Solution"}
                </button>
            </div>
        </form>
    );
}
