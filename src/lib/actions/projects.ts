"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
    const cat = formData.get("cat") as string;
    const emoji = formData.get("emoji") as string;
    const tag = formData.get("tag") as string;
    const name = formData.get("name") as string;
    const desc = formData.get("desc") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.project.create({
        data: { cat, emoji, tag, name, desc, order },
    });

    revalidatePath("/admin/content/portfolio");
    redirect("/admin/content/portfolio");
}

export async function updateProject(id: string, formData: FormData) {
    const cat = formData.get("cat") as string;
    const emoji = formData.get("emoji") as string;
    const tag = formData.get("tag") as string;
    const name = formData.get("name") as string;
    const desc = formData.get("desc") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.project.update({
        where: { id },
        data: { cat, emoji, tag, name, desc, order },
    });

    revalidatePath("/admin/content/portfolio");
    redirect("/admin/content/portfolio");
}

export async function deleteProject(id: string) {
    await prisma.project.delete({
        where: { id },
    });

    revalidatePath("/admin/content/portfolio");
}
