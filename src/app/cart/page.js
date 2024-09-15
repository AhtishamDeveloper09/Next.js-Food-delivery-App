import Image from "next/image";
import React from "react";

function CartPage() {
  return (
    <div className="flex flex-col text-red-500 h-screen lg:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Products */}
      <div className="flex flex-col h-1/2 p-4 overflow-auto lg:h-full lg:w-2/3 lg:justify-center 2xl:w-1/2">
        {/* Single Item */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="sm:text-xl font-bold uppercase">sicilian pizza</h1>
            <span>Large</span>
          </div>
          <h2 className="font-semibold">$34.40</h2>
          <span className="font-medium cursor-pointer">X</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="sm:text-xl font-bold uppercase">sicilian pizza</h1>
            <span>Large</span>
          </div>
          <h2 className="font-semibold">$34.40</h2>
          <span className="font-medium cursor-pointer">X</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="sm:text-xl font-bold uppercase">sicilian pizza</h1>
            <span>Large</span>
          </div>
          <h2 className="font-semibold">$34.40</h2>
          <span className="font-medium cursor-pointer">X</span>
        </div>
      </div>

      {/* Payment Details */}
      <div className="flex flex-col gap-4 h-1/2 p-4 bg-fuchsia-50 lg:h-full lg:w-1/2 lg:justify-center 2xl:w-1/2">
        <div className="flex justify-between items-center">
          <span>Subtotal (3 items)</span>
          <span>$79.90</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Service Cost</span>
          <span>$$0.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Delivery Cost</span>
          <span className="uppercase text-green-500">Free!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center">
          <span className="uppercase">Total(Incl. Vat)</span>
          <span className="font-bold">$79.90</span>
        </div>
        <button className="bg-red-500 font-semibold uppercase text-white w-1/2 p-3 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
