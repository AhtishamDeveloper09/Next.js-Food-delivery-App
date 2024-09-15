import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MenuPage() {
  return (
    <div className="p-4 h-full flex flex-col items-center md:flex-row md:h-[calc(100vh-9rem)] lg:px-16 xl:px-28">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          style={{ backgroundImage: `url(${category.img})` }}
          className="w-full bg-cover px-2 py-4 lg:h-[60%]"
        >
          {/* Text */}
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="text-2xl font-bold uppercase">{category.title}</h1>
            <p className="text-sm my-2 md:my-4 md:text-md">{category.desc}</p>
            <button
              className={`hidden lg:block p-2 font-medium rounded-md ${
                category.color === "black" ? "text-white" : "text-red-500"
              } ${category.color === "black" ? "bg-black" : "bg-white"}`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPage;
