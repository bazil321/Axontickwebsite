import LoginForm from "@/components/admin/LoginForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#070707] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-8 bg-[#111111] border border-[#222222] rounded-2xl shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Admin Login
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Sign in to manage Axontick content
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
