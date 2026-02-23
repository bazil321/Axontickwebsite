import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/admin/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isAdminPage = nextUrl.pathname.startsWith("/admin");
            const isLoginPage = nextUrl.pathname === "/admin/login";

            if (isAdminPage) {
                if (isLoggedIn) {
                    if (isLoginPage) return Response.redirect(new URL("/admin", nextUrl));
                    return true;
                }
                return false; // Redirect to login
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for edge compatibility
} satisfies NextAuthConfig;
