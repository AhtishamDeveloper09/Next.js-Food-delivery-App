import React from "react";

function OrdersPage() {
  return (
    <div className="p-4 lg:px-16 xl:px-28">
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-4 px-1">19.07.2023</td>
            <td className="py-4 px-1">89.90</td>
            <td className="hidden md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-4 px-1 text-red-500 font-semibold">On the way (approx. 10min)...</td>
          </tr>

          <tr className="text-sm md:text-base odd:bg-gray-200">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-4 px-1">19.07.2023</td>
            <td className="py-4 px-1">89.90</td>
            <td className="hidden md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-4 px-1">On the way (approx. 10min)...</td>
          </tr>

          <tr className="text-sm md:text-base odd:bg-gray-200">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-4 px-1">19.07.2023</td>
            <td className="py-4 px-1">89.90</td>
            <td className="hidden md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
