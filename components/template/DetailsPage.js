import React from "react";
import Location from "../icons/Location.js";
import Dollar from "../icons/Dollar";
const DetailsPage = (props) => {
  const { id, name, price, discount, introduction, details, ingredients, recipe } = props;

  return (
    <div className="max-w-4xl m-auto mt-24 bg-black h-screen">
      <h1 className="font-bold text-green-500 border-b border-b-green-500 p-3">details</h1>
      <div className="flex mt-8">
        <img src={`/images/${id}.jpeg`} className="w-72 " />
        <div className="flex flex-col mt-10 ml-10">
          <h1 className="text-white font-bold mb-5">{name}</h1>
          <div className="flex">
            <Location></Location>
            <p className="text-white ml-11">{details[0].Cuisine}</p>
          </div>
          <div className="flex">
            <Dollar></Dollar>
            {discount ? (
              <span className="text-red-600 ml-7">{(price * (100 - discount)) / 100}$</span>
            ) : (
              <p className="text-white ml-7">{price}$</p>
            )}
          </div>
          {discount ? (
            <p className="text-white bg-red-600 mt-10 text-center p-2">discount:{discount}%OFF</p>
          ) : null}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-white">{introduction}</p>
      </div>

      <div className="mt-5">
        <p className="text-green-500 font-bold">Ditails</p>
        {details.map((item) => {})}
      </div>
    </div>
  );
};

export default DetailsPage;
