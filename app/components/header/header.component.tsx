"use client";
import React from "react";
import Link from "next/link";
import style from "./header.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const signInHendler = () => {
    router.push("/auth/signin");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link className="active" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/user/profile">Profile</Link>
        </li>
        <li>
          <Link href="/user/panel">User Panel</Link>
        </li>

        <li>
          <Link href="/admin/panel">Admin Panel</Link>
        </li>
       
        <li style={{ float: "right" }}>
          <Link href="/auth/signin">
            {session ? <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/auth/signin' })}>Sign out</button> : <button onClick={() => signInHendler()}>Sign In</button>}
          </Link>
        </li>
        <li style={{ float: "right" }}>
          <Link href=""> {session ? "Signed in as" + session.user.email : "Not Sign in yet"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
