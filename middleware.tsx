import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token?.value && request.nextUrl.pathname === "/") {
    const absoluteUrl = new URL("/auth/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
  if (token?.value && request.nextUrl.pathname.includes("/auth")) {
    const absoluteUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
  return NextResponse.next();
}
