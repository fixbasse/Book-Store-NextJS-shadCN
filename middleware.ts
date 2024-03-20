import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { apiAuthPrefix, authRoute, publicRoutes } from "./route";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoute.includes(nextUrl.pathname); // Modal

    if (isApiRoute) {
        return;
    };

    if (!isPublicRoute && !isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
    };

    return;
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}