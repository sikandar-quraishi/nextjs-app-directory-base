"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session, status  } = useSession();
  console.log("session", session)
  console.log("status", status)


  return (
    <>
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
};
