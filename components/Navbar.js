"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 shadow-md bg-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Ghost Note</h1>
      <Link href="/confess" className="px-4 py-2 bg-black text-white rounded">
        Confess
      </Link>
    </nav>
  );
};

export default Navbar;
