import React from "react";
import Menu from "../../components/template/Menu";

function menu({ data }) {
  return (
    <div>
      <Menu data={data}></Menu>
    </div>
  );
}

export default menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10,
  };
}
