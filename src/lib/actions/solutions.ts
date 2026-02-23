"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSolution(formData: FormData) {
    const slug = formData.get("slug") as string;
    const icon = formData.get("icon") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const features = formData.get("features") as string;
    const link = formData.get("link") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.solution.create({
        data: { slug, icon, title, desc, features, link, order },
    });

    revalidatePath("/admin/content/solutions");
    redirect("/admin/content/solutions");
}

export async function updateSolution(id: string, formData: FormData) {
    const slug = formData.get("slug") as string;
    const icon = formData.get("icon") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const features = formData.get("features") as string;
    const link = formData.get("link") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    await prisma.solution.update({
        where: { id },
        data: { slug, icon, title, desc, features, link, order },
    });

    revalidatePath("/admin/content/solutions");
    redirect("/admin/content/solutions");
}

export async function deleteSolution(id: string) {
    await prisma.solution.delete({
        where: { id },
    });

    revalidatePath("/admin/content/solutions");
}
