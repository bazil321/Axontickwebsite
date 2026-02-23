import prisma from "@/lib/prisma";

export default async function AdminDashboardOverview() {
    const userCount = await prisma.user.count();
    const projectCount = await prisma.project.count();
    const serviceCount = await prisma.service.count();
    const solutionCount = await prisma.solution.count();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title="Total Projects" value={projectCount} icon="📁" />
                <DashboardCard title="Active Services" value={serviceCount} icon="⚡" />
                <DashboardCard title="Solutions" value={solutionCount} icon="💡" />
                <DashboardCard title="Admin Users" value={userCount} icon="👤" />
            </div>

            <div className="mt-12 bg-[#111111] border border-[#222222] rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-[#00A3FF] hover:bg-[#0082CC] rounded-lg transition-colors">
                        Add New Project
                    </button>
                    <button className="px-4 py-2 bg-[#222222] hover:bg-[#333333] rounded-lg transition-colors">
                        Edit Services
                    </button>
                </div>
            </div>
        </div>
    );
}

function DashboardCard({ title, value, icon }: { title: string; value: number; icon: string }) {
    return (
        <div className="bg-[#111111] border border-[#222222] rounded-xl p-6 flex items-center space-x-4">
            <div className="text-3xl p-3 bg-[#1a1a1a] rounded-lg">{icon}</div>
            <div>
                <p className="text-gray-400 text-sm">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
}
