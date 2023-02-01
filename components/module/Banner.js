import Link from "next/link";
import React from "react";
function Banner() {
  return (
    <div className="w-full h-[500px] bg-black  p-10">
      <div className="bg-black flex max-w-4xl m-auto ">
        <div className="text-white ml-7 mt-20">
          <div className="mt-5">
            <span className="border-b  border-b-green-400 ">Foodowo</span>
            <p className="mt-5">Food Delivery and Takeout!</p>
            <span className=" inline-block w-80 mt-14">
              BotoFood is an online food ordering and delivery platform launched by Uber in 2014.
              Meals are delivered by couriers using cars, scooters, bikes, or on foot.
            </span>
            <Link href="/menu">
              <button className="font-bold text-black bg-green-500 w-24 h-10 mt-14 rounded-md ">
                start
              </button>
            </Link>
          </div>
        </div>
        <div className="ml-10 mt-20">
          <img src="/images/Banner.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
