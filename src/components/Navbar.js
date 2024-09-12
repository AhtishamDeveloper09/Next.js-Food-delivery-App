// "use client"

import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

function Navbar() {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-red-500 uppercase md:h-24 lg:px-16 xl:px-28">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Foodivery</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 right-2 lg:static flex items-center cursor-pointer gap-2 bg-orange-300 rounded-md px-1">
          <Image src="/phone.png" width={20} height={20} alt="" />
          <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/order">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
