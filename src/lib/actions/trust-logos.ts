"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTrustLogo(formData: FormData) {
    const name = formData.get("name") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.trustLogo.create({
        data: { name, order },
    });

    revalidatePath("/admin/content/trust-logos");
    redirect("/admin/content/trust-logos");
}

export async function updateTrustLogo(id: string, formData: FormData) {
    const name = formData.get("name") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.trustLogo.update({
        where: { id },
        data: { name, order },
    });

    revalidatePath("/admin/content/trust-logos");
    redirect("/admin/content/trust-logos");
}

export async function deleteTrustLogo(id: string) {
    await prisma.trustLogo.delete({
        where: { id },
    });

    revalidatePath("/admin/content/trust-logos");
}
