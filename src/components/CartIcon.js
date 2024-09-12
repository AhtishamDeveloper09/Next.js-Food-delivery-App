import Image from "next/image";
import Link from "next/link";
import React from "react";

function CartIcon() {
  return (
    <Link href="/cart" className="flex items-center gap-2">
      <div className="relative h-8 w-8 md:h-6 md:w-6">
        <Image src="/cart.png" fill alt="" />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
}

export default CartIcon;
