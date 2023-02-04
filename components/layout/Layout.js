import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <header className="w-full h-16 bg-black ">
        <div className="flex justify-between max-w-4xl m-auto ">
          <div className=" my-5">
            <Link href="/" className="text-green-500 font-bold ">
              FoodoWoo!!
            </Link>
          </div>
          <div className=" my-5 text-white">
            <Link href="/menu" className="mx-5">
              menu
            </Link>
            <Link href="/category ">category</Link>
          </div>
        </div>
      </header>
      <div className="min-h-full flex flex-col">
        <div className="mb-20">{children}</div>
        <footer className="text-center bg-green-400  h-9 text-black font-bold mt-auto ">
          <span className="my-auto"> nextjs course | Foodowoo project @copyright </span>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
