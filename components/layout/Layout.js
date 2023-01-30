import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="w-full h-16 bg-black ">
        <div className="flex justify-between max-w-4xl m-auto ">
          <div className="mx-5 my-5">
            <Link href="/" className="text-green-500 font-bold ">
              FoodoWoo!!
            </Link>
          </div>
          <div className="mx-5 my-5 text-white">
            <Link href="/menu" className="mx-5">
              menu
            </Link>
            <Link href="/category ">category</Link>
          </div>
        </div>
      </header>
      <div className="h-screen ">{children}</div>
      <footer className="text-center bg-green-400  h-9 text-black font-medium">
        <span> nextjs course | Foodowoo project @copyright </span>
      </footer>
    </>
  );
}

export default Layout;
