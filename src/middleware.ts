import { auth } from "@/lib/auth";

export default auth((req) => {
  const protectedPaths = [
    "/dashboard",
    "/journal",
    "/trackers",
    "/arsenal",
    "/monetization"
  ];
  const isProtected = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

  if (!req.auth && isProtected) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    loginUrl.searchParams.set("from", req.nextUrl.pathname);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/journal/:path*", "/trackers/:path*", "/arsenal/:path*", "/monetization/:path*"]
};
