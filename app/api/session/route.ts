import { getServerSession } from "next-auth";
import { authOptions } from '../auth/[...nextauth]/options';
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}


// import { getServerSession } from "next-auth"
// import { authOptions } from "../auth/[...nextauth]/options";
// import { NextResponse } from "next/server"

// export async function GET(request) {
//   const session = await getServerSession(authOptions)

//   return NextResponse.json({
//     authenticated: !!session,
//     session
//   })
// }
