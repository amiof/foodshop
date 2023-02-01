import React from "react";
import Card from "../module/Card";
function Menu({ data }) {
  return (
    <div className="w-full h-full bg-black">
      <div className="max-w-4xl m-auto text-white">
        <h1 className="font-bold border-b border-b-green-600">Menu</h1>
        <div className="flex flex-wrap gap-5">
          {data.map((food) => (
            <Card key={food.id} {...food}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
