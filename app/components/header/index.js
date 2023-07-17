import React from "react";
import Link from "next/link";
import style from "./header.module.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="active" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li style={{ float: "right" }}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
