import React from "react";

const Instruction = () => {
  return (
    <div className="max-w-4xl m-auto h-72">
      <h2 className="text-green-600 ">how to order?</h2>
      <ul className="text-white mt-10 list-outside list-disc marker:text-white ml-14 ">
        <li>sign in (or create an account) and set your delivery address.</li>
        <li>choose the restaurant you want to order from.</li>
        <li>select your items and tap “Add to Cart”.</li>
        <li>To place your order, select “View cart” or “Checkout” </li>
        <li>peview your order and tap “Place Order”...</li>
        <li>Track your order progress.</li>
      </ul>
    </div>
  );
};

export default Instruction;
