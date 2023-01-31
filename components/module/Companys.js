import React from "react";

import Apple from "../icons/Apple.js";
import Tesla from "../icons/Tesla.js";
import Spacex from "../icons/SpaceX.js";
import Biancer from "../icons/Binance.js";
const Companys = () => {
  return (
    <div className="max-w-4xl m-auto">
      <div className="flex justify-between items-center">
        <Apple></Apple>
        <Tesla></Tesla>
        <Biancer></Biancer>
        <Spacex></Spacex>
      </div>
    </div>
  );
};

export default Companys;
