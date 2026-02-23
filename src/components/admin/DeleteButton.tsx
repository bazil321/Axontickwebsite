"use client";

import { useTransition } from "react";

interface DeleteButtonProps {
    id: string;
    onDelete: (id: string) => Promise<void>;
}

export default function DeleteButton({ id, onDelete }: DeleteButtonProps) {
    const [isPending, startTransition] = useTransition();

    const handleHover = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Just for UX
    };

    return (
        <button
            disabled={isPending}
            onClick={() => {
                if (confirm("Are you sure you want to delete this item?")) {
                    startTransition(async () => {
                        await onDelete(id);
                    });
                }
            }}
            className="text-red-500/70 hover:text-red-500 transition-colors disabled:opacity-50"
        >
            {isPending ? "Deleting..." : "Delete"}
        </button>
    );
}
