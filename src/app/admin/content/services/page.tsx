import prisma from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteService } from "@/lib/actions/services";

export default async function ServicesPage() {
    const services = await prisma.service.findMany({
        orderBy: { order: "asc" },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Services</h1>
                <Link
                    href="/admin/content/services/new"
                    className="px-4 py-2 bg-[#00A3FF] hover:bg-[#0082CC] rounded-lg transition-colors text-sm font-medium"
                >
                    Add New Service
                </Link>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#222222] bg-[#1a1a1a]">
                            <th className="px-6 py-4 text-gray-400 font-medium w-16 text-center">Icon</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Title</th>
                            <th className="px-6 py-4 text-gray-400 font-medium">Description</th>
                            <th className="px-6 py-4 text-gray-400 font-medium w-20 text-center">Order</th>
                            <th className="px-6 py-4 text-gray-400 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222222]">
                        {services.map((service) => (
                            <tr key={service.id} className="hover:bg-[#161616] transition-colors">
                                <td className="px-6 py-4 text-2xl text-center">{service.icon}</td>
                                <td className="px-6 py-4 font-bold text-white">{service.title}</td>
                                <td className="px-6 py-4 text-gray-400 text-sm max-w-md truncate">
                                    {service.desc}
                                </td>
                                <td className="px-6 py-4 text-center text-gray-400">{service.order}</td>
                                <td className="px-6 py-4 text-right space-x-3">
                                    <Link
                                        href={`/admin/content/services/${service.id}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Edit
                                    </Link>
                                    <DeleteButton id={service.id} onDelete={deleteService} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
