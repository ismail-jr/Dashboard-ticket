import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Logo from "./public/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image src="logo.svg" alt="logo" width={40} height={40} />
      </Link>
      <Link href="/">
        <h1>Helpdesk</h1>
      </Link>
      <Link href="/">Home</Link>
      <Link href="/ticket">Ticket</Link>
      <Link href="/ticket/create">Create Ticket</Link>
    </nav>
  );
};

export default Navbar;
