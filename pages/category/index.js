import React from "react";
import CategoryPage from "../../components/template/CategoryPage";

function Category(data) {
  return <CategoryPage {...data}></CategoryPage>;
}

export default Category;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  const filterdData = data.filter((item) => {
    const { details } = item;
    const { Difficulty: diff } = details[2];
    const [timeMin] = Object.values(details[4])[0].split(" ");
    if (diff == difficulty && time == "less" && timeMin <= 30) {
      return item;
    } else if (diff == difficulty && time == "more" && timeMin > 30) {
      return item;
    }
  });
  // console.log(filterdData);
  return {
    props: { data: filterdData },
  };
}
