"use client";

// import { SessionProvider } from "next-auth/react";

// type Props = {
//   children?: React.ReactNode;
// };

// export const NextAuthProvider = ({ children }: Props) => {
//   return <SessionProvider>{children}</SessionProvider>;
// };

import { SessionProvider } from "next-auth/react"

export const NextAuthProvider = ({children }) => {
  return <SessionProvider>{children}</SessionProvider>
}
