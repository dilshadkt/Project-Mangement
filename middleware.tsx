import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";
export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const protectedRout = ["/", "/stick-wall", "/upcoming", "/calender"];

  //  REDIRECT TO LOGIN ---> NO TOKEN
  if (!token && protectedRout.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  //  REDIRECT TO LOGIN ---> IF TOKEN IS NOT VALID
  const response = await verifyToken(token);
  if (!response.status && protectedRout.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  // REDIRECT TO DASHBOARD ---> IF TOKEN IS THERE
  if (token && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
