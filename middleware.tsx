import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const protectedRoutes = ["/", "/stick-wall", "/upcoming", "/calendar"];

  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

  // If no token and the route is protected, redirect to login
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If token is present, verify it
  if (token) {
    const response = await verifyToken(token);

    // If token is invalid and the route is protected, redirect to login
    if (!response.status && isProtectedRoute) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // If token is valid and the request is for auth routes, redirect to dashboard
    if (response.status && request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Proceed to the next middleware or the requested resource
  return NextResponse.next();
}

// Apply the middleware only to specific routes
export const config = {
  matcher: ["/", "/stick-wall", "/upcoming", "/calendar", "/auth/:path*"],
};
