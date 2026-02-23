"use client";

import { useActionState } from "react";
import { authenticate } from "@/lib/actions/auth";

export default function LoginForm() {
    const [errorMessage, dispatch, isPending] = useActionState(
        authenticate,
        undefined
    );

    return (
        <form action={dispatch} className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-[#333333] bg-[#1a1a1a] text-white rounded-t-lg focus:outline-none focus:ring-[#00A3FF] focus:border-[#00A3FF] sm:text-sm placeholder-gray-500"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-[#333333] bg-[#1a1a1a] text-white rounded-b-lg focus:outline-none focus:ring-[#00A3FF] focus:border-[#00A3FF] sm:text-sm placeholder-gray-500"
                        placeholder="Password"
                    />
                </div>
            </div>

            {errorMessage && (
                <div className="text-red-500 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                    {errorMessage}
                </div>
            )}

            <div>
                <button
                    type="submit"
                    disabled={isPending}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#00A3FF] hover:bg-[#0082CC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A3FF] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? "Signing in..." : "Sign in"}
                </button>
            </div>
        </form>
    );
}
