import React from "react";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";

const Attributes = () => {
  return (
    <div className="max-w-4xl m-auto h-72">
      <h2 className="text-green-600 font-bold">why us?</h2>
      <div className="flex justify-between  m-auto mt-12">
        <div className="border  border-gray-500 w-50 h-50 p-16  hover:shadow-md hover:shadow-green-500 rounded-lg relative ">
          <Fast></Fast>
          <p className="text-white  absolute bottom-5">Fast</p>
        </div>
        <div className="border  border-gray-500 w-50 h-50 p-16  hover:shadow-md hover:shadow-green-500 rounded-lg relative ">
          <Food></Food>
          <p className="text-white  absolute bottom-5">Food</p>
        </div>
        <div className="border  border-gray-500 w-50 h-50 p-16  hover:shadow-md hover:shadow-green-500 rounded-lg relative ">
          <Clock></Clock>
          <p className="text-white  absolute bottom-5">clock</p>
        </div>
        <div className="border  border-gray-500 w-50 h-50 p-16  hover:shadow-md hover:shadow-green-500 rounded-lg relative ">
          <Choice></Choice>
          <p className="text-white  absolute bottom-5">choice</p>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
