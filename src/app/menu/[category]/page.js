import { items, pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryPage() {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="w-full h-[60vh] flex flex-col justify-between border-b-2 border-r-2 border-red-500 even:bg-fuchsia-50 sm:w-1/2 lg:w-1/3 p-4 group"
        >
          {/* Image */}
          <div className="relative h-[80%]">
            <Image src={item.img} fill alt="" className="object-contain" />
          </div>
          {/* Text */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-xl uppercase p-2">{item.title}</h1>
            <h2 className="text-xl group-hover:hidden">${item.price}</h2>
            <button className="uppercase hidden group-hover:block bg-red-500 p-2 rounded-md text-white">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;
