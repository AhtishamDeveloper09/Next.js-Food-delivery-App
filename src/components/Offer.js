import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text */}
      <div className="flex flex-1 flex-col items-center justify-center text-center gap-4 p-4 md:text-left md:gap-6 md:p-6">
        <h1 className="text-white text-4xl font-bold px-4 xl:text-5xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white px-4 xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="text-white bg-red-500 py-2 px-4 rounded-md font-bold md:text-xl">
          Order Now
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 relative md:h-full">
        <Image
          src="/offerProduct.png"
          alt=""
          fill
          className=" object-contain"
        />
      </div>
    </div>
  );
}

export default Offer;
