"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createStat(formData: FormData) {
    const number = formData.get("number") as string;
    const suffix = formData.get("suffix") as string;
    const label = formData.get("label") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.stat.create({
        data: { number, suffix, label, order },
    });

    revalidatePath("/admin/content/stats");
    redirect("/admin/content/stats");
}

export async function updateStat(id: string, formData: FormData) {
    const number = formData.get("number") as string;
    const suffix = formData.get("suffix") as string;
    const label = formData.get("label") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.stat.update({
        where: { id },
        data: { number, suffix, label, order },
    });

    revalidatePath("/admin/content/stats");
    redirect("/admin/content/stats");
}

export async function deleteStat(id: string) {
    await prisma.stat.delete({
        where: { id },
    });

    revalidatePath("/admin/content/stats");
}
