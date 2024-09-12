"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

function Menu() {
  const links = [
    {
      id: 1,
      title: "Homepage",
      url: "/",
    },
    {
      id: 2,
      title: "Menu",
      url: "/menu",
    },
    {
      id: 3,
      title: "Working Hours",
      url: "/",
    },
    {
      id: 4,
      title: "Contact",
      url: "/",
    },
  ];

  const [open, setOpen] = useState(false);

  // Temporary
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          height={20}
          width={20}
          alt=""
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          height={20}
          width={20}
          alt=""
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col gap-8 z-10 items-center justify-center text-3xl">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <div onClick={() => setOpen(false)}>
            <CartIcon />
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
