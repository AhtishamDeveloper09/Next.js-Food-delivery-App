import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

function SingleProductPage() {
  return (
    <div className="flex flex-col h-screen md:h-[calc(100vh-9rem)] justify-around mb-12 sm:mb-0 p-4 lg:px-16 xl:px-28 text-red-500 md:flex-row md:gap-6 md:items-center">
      {/* Image */}
      <div className="relative w-full h-1/2 md:h-[80%]">
        <Image src={singleProduct.img} fill alt="" className="object-contain" />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-2 h-1/2 md:justify-center md:h-[70%] md:gap-4 xl:gap-6">
        <h1 className="text-2xl lg:text-4xl font-bold uppercase">{singleProduct.title}</h1>
        <p className="lg:text-xl">{singleProduct.desc}</p>
        <Price
          id={singleProduct.id}
          price={singleProduct.price}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
}

export default SingleProductPage;
