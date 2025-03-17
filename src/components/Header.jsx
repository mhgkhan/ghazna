"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [openedNav, setOpenedNav] = useState(false);

  return (
    <header className="w-full py-2 md:px-0 px-4 sticky top-0">
      <div className="container bg-pink-600 mx-auto flex items-center justify-between md:flex-row flex-col gap-2 border border-1 border-white p-2 rounded-md">
        <div className="logo-area flex items-center justify-between gap-5 md:w-auto w-full">
          <div className="logo flex items-center justify-center gap-1">
            <div className="logo-1 flex items-center justify-center text-5xl">
              <span className="[text-shadow:1px_1px_0px_rgba(120,80,80,.5)]">
                G
              </span>
              <span>H</span>
            </div>
            <div className="logo-2 text-sm ">
              <p>Hasnain</p> <p>Ghazna</p>
            </div>
          </div>
          <button
            onClick={() => setOpenedNav(!openedNav)}
            className="md:hidden hover:bg-gray-100 active:border active:border-1 active:border-black active:border-dotted transition-all duration-200 cursor-pointer w-auto p-3 flex items-center justify-center rounded-md text-3xl text-black bg-white border-none outline-none shadow-md shadow-gray-20"
          >
            <RxHamburgerMenu />
          </button>
        </div>
        <nav
          className={`navigation-area md:w-auto w-full md:h-auto h-0 ${
            openedNav ? "h-[200px]" : "h - 0"
          } overflow-hidden transition-all duration-200 `}
        >
          <ul className="flex md:flex-row flex-col md:w-auto w-full items-center justify-center md:gap-4 gap-1 list-none mt-5">
            {Array.from(["home", "blogs", "projects", "login"]).map(
              (ele, ind) => {
                return (
                  <li
                    key={ind}
                    className={`active:border active:border-2 active:border-white active:border-dotted rounded-md p-2 md:w-auto w-full text-center md:bg-inherit bg-pink-500`}
                  >
                    <Link
                      href={`/${ele == "home" ? "/" : ele}`}
                      className="text-white w-full block"
                    >
                      {ele.toUpperCase()}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
