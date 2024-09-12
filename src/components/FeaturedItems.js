import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

function FeaturedItems() {
  return (
    <div className="w-full overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="h-screen w-screen flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]"
          >
            {/* Image */}
            <div className="relative h-1/2 w-full hover:rotate-[60deg] transition-all duration-500">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
            {/* Text */}
            <div className="flex h-1/2 flex-col items-center md:gap-2 text-center justify-center">
              <h2 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h2>
              <p className="px-3 py-1 lg:py-2 2xl:p-6">{item.desc}</p>
              <span className="font-bold text-xl lg:py-2">${item.price}</span>
              <button className="bg-red-500 text-white p-2 font-semibold rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedItems;
