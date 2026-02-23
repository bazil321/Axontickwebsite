"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createService(formData: FormData) {
    const icon = formData.get("icon") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.service.create({
        data: { icon, title, desc, order },
    });

    revalidatePath("/admin/content/services");
    redirect("/admin/content/services");
}

export async function updateService(id: string, formData: FormData) {
    const icon = formData.get("icon") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.service.update({
        where: { id },
        data: { icon, title, desc, order },
    });

    revalidatePath("/admin/content/services");
    redirect("/admin/content/services");
}

export async function deleteService(id: string) {
    await prisma.service.delete({
        where: { id },
    });

    revalidatePath("/admin/content/services");
}
