"use client";
import React, { useEffect, useState } from "react";

function Price({ id, price, options }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [seleted, setSelected] = useState(0);

  useEffect(() => {
    setTotal(quantity * (price + options[seleted].additionalPrice));
  }, [seleted, quantity, options, price]);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">${total.toFixed(2)}</h2>
      {/* Options */}
      <div className="flex gap-4">
        {options.map((item, index) => (
          <button
            className="min-w-[5rem] px-2 py-1 ring-1 ring-red-400 rounded-md"
            key={item.title}
            style={{
              background: seleted === index ? "rgb(248 113 113)" : "white",
              color: seleted === index ? "white" : "rgb(239 68 68)",
            }}
            onClick={() => setSelected(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Quantity and Add Button */}
      <div className="flex justify-between items-center ring-1 ring-red-500">
        {/* Quantity */}
        <div className="flex justify-between w-full p-3">
          <span>Quantity</span>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Add to cart button */}
        <button className="p-3 w-56 text-white uppercase font-semibold bg-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Price;
