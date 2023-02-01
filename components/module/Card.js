import React from "react";

import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
const Card = ({ id, name, price, discount, details }) => {
  return (
    <div className="border border-gray-700 text-white w-64 h-64 mt-10 shadow-md shadow-green-600">
      <div>
        <img src={`/images/${id}.jpeg`} alt={name}></img>
      </div>
      <div className="text-center">{name}</div>
      <div className="flex justify-between mx-10">
        <Dollar></Dollar>
        <p>{`${price} $`}</p>
      </div>
      <div className="flex justify-between mx-10">
        <Location></Location>
        <span>{details[0].Cuisine}</span>
      </div>
    </div>
  );
};

export default Card;
