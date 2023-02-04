import { useRouter } from "next/router";
import React, { useState } from "react";
import Card from "../module/Card.js";

const CategoryPage = ({ data }) => {
  console.log(data);
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const router = useRouter();
  const chengeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  const clickHandler = () => {
    router.push({ pathname: "/category", query });
  };
  return (
    <div className="text-white max-w-4xl  mx-auto mt-44 min-h-[calc(100vh-22rem)]">
      <h1 className="font-bold text-green-500">Category</h1>
      <div className="mt-10">
        <select
          className="text-green-600 font-bold px-3 py-2 rounded-md"
          name="difficulty"
          onChange={chengeHandler}
          value={query.difficulty}
        >
          <option value="empety">difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          className="text-green-600 font-bold ml-14 px-3 py-2 rounded-md"
          name="time"
          onChange={chengeHandler}
          value={query.time}
        >
          <option value="empety">Cooking Time</option>
          <option value="more">More tham 30 min </option>
          <option value="less">Letter than 30 min </option>
        </select>
        <button
          className="ml-10 bg-green-500 py-2 px-5 rounded-md text-black"
          onClick={clickHandler}
        >
          {" "}
          search{" "}
        </button>
      </div>
      <div className="flex gap-10 flex-wrap">{data && data.map((item) => <Card {...item} />)}</div>
    </div>
  );
};

export default CategoryPage;
