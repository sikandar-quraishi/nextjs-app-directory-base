// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("token: req", req.nextauth.token);
    console.log("NextResponse Method", NextResponse);
    if (req.nextUrl.pathname.startsWith("/user/profile") && req.nextauth.token?.role !== "user")
    // return NextResponse.rewrite(
    //   new URL("/auth/signin?message=You Are Not Authorized!", req.url)
    // );
    return NextResponse.redirect(
      new URL("/auth/signin", req.url)
    );

    if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin")
      // return NextResponse.rewrite(
      //   new URL("/auth/signin?message=You Are Not Authorized!", req.url)
      // );
      return NextResponse.redirect(
        new URL("/denied", req.url)
      );
    if (req.nextUrl.pathname.startsWith("/user") && req.nextauth.token?.role !== "user")
      return NextResponse.rewrite(
        new URL("/auth/signin", req.url)
      );
      
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};