import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-between items-center h-12 md:h-24 text-red-500 p-4 lg:px-16 xl:px-28">
      <Link href="/" className="text-xl md:font-bold">Foodivery</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
