"use client";

import { createTrustLogo, updateTrustLogo } from "@/lib/actions/trust-logos";
import { useTransition } from "react";

interface TrustLogoFormProps {
    logo?: any;
}

export default function TrustLogoForm({ logo }: TrustLogoFormProps) {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            if (logo) {
                await updateTrustLogo(logo.id, formData);
            } else {
                await createTrustLogo(formData);
            }
        });
    };

    return (
        <form action={handleSubmit} className="space-y-6 max-w-2xl">
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                <input
                    name="name"
                    defaultValue={logo?.name}
                    required
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                    placeholder="e.g. Photon Minds"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Display Order</label>
                <input
                    name="order"
                    type="number"
                    defaultValue={logo?.order ?? 0}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#00A3FF]"
                />
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-6 py-2 bg-[#00A3FF] hover:bg-[#0082CC] text-white rounded-lg transition-colors font-medium disabled:opacity-50"
                >
                    {isPending ? "Saving..." : logo ? "Update Logo" : "Create Logo"}
                </button>
            </div>
        </form>
    );
}
