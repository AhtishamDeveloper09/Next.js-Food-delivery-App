"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  // {
  //   id: 3,
  //   title: "the best pizza to share with your family",
  //   image: "/slide3.jpg",
  // },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* Text */}
      <div className="flex flex-col flex-1 justify-center items-center gap-6 text-red-500 font-bold">
        <h1 className="text-3xl text-center p-2 lg:p-8 uppercase md:text-4xl lg:text-5xl xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white p-2 lg:p-4 rounded-lg lg:text-2xl">
          Order Now
        </button>
      </div>

      {/* Image */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Slider;
