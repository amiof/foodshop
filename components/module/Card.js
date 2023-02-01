import Link from "next/link";
import { relative } from "path";
import React from "react";

import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
const Card = ({ id, name, price, discount, details }) => {
  return (
    <div className="border border-gray-700 text-white w-64 h-auto mt-10 shadow-md shadow-green-600 relative">
      <div>
        <img src={`/images/${id}.jpeg`} alt={name}></img>
      </div>
      <div className="text-center">{name}</div>
      <div className="flex justify-between ">
        <Dollar></Dollar>
        {discount ? (
          <p className="text-red-600">{(price * (100 - discount)) / 100}$</p>
        ) : (
          <p>{`${price} $`}</p>
        )}
      </div>

      <div className="flex justify-between ">
        <Location></Location>
        <span>{details[0].Cuisine}</span>
      </div>
      {discount ? (
        <span className="bg-red-600 absolute top-3 text-center px-3 rounded-lg">{discount}%</span>
      ) : null}
      <div className="w-full  flex justify-center">
        <Link href={`/menu/${id}`} className="w-full ">
          <button className="bg-green-500 text-black w-full ">details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
