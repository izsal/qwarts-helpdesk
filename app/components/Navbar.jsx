import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./1.png";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Qwarts Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
      />
      <h1>Qwarts Helpdesk</h1>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>Tickets</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
    </nav>
  );
}
