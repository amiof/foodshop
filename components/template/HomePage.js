import React from "react";
import Attributes from "../module/Attributes";
import Banner from "../module/Banner";
import Companys from "../module/Companys";
import Definition from "../module/Definition";
import Instruction from "../module/Instruction";

function HomePage() {
  return (
    <div className="bg-black">
      <Banner></Banner>
      <Attributes></Attributes>
      <Definition></Definition>
      <Companys></Companys>
      <Instruction></Instruction>
    </div>
  );
}

export default HomePage;
