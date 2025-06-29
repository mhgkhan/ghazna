"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
// import { deleteCookie } from "cookies-next/client";
import { useCookiesNext } from 'cookies-next';
import FormsButton from "./ui/buttonsandlinks/FormsButton";

import { CgLogIn, CgLogOut } from "react-icons/cg"
import { FaTimes } from 'react-icons/fa';

export default function Header({ isLogged }) {

  const { deleteCookie } = useCookiesNext();


  const [openedNav, setOpenedNav] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setOpenedNav(false);
  }, [pathname])

  return (
    <header className="md:w-[75%] w-[95%] mx-auto py-1 md:px-0 px-4 sticky top-0 dark:bg-gray-800 bg-gray-800 rounded-md dark:text-white z-50 border border-1 dark:border-gray-400 ">
      <div className="container mx-auto flex items-center justify-between md:flex-row flex-col gap-2 pr-2 py-1 ">

        {/* logo area  */}
        <div className="logo-area flex items-center justify-between gap-2 md:w-auto w-full">
          <div className="px-3 logo border-1 border-r  border-gray-400 flex items-center justify-center gap-1 cursor-pointer" onClick={() => {
            router.push("/");
          }}>
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
            className="md:hidden hover:bg-gray-100 border border-2 border-dotted border-transparent active:border-black  transition-all duration-200 cursor-pointer w-auto p-3 flex items-center justify-center rounded-md text-3xl text-black bg-white outline-none shadow-md shadow-gray-20"
            aria-label="Toggle sidebar"
          >
            {!openedNav ? <RxHamburgerMenu /> : <FaTimes />}
          </button>

        </div>

        {/* navigation area  */}
        <nav
          className={` flex items-center justify-between gap-5 md:flex-row flex-col navigation-area md:w-auto w-full md:h-auto h-0 ${openedNav ? "h-[300px]" : "h - 0"
            } overflow-hidden transition-all duration-200 `}
        >
          <ul className="flex md:flex-row flex-col md:w-auto w-full items-center justify-center md:gap-4 gap-1 list-none md:mt-0 mt-5">
            {Array.from(!isLogged ? [{ title: "home", link: "/" }, { title: "services", link: "/#servicessection" }, { title: "blog", link: "/blog" }, { title: "Old Website", link: "http://mhgkhanp.netlify.app" }] : [{ title: "Profile", link: "/profile/" }, { title: "Blog", link: "/blog/" }, { title: "Notifications", link: "/profile/notifications/" }]).map(
              (ele, ind) => {
                return (
                  <li
                    key={ind}
                    className={`active:border active:border-2 sm:mx-auto border-2 border-gray-800 active:border-white active:border-dotted rounded-md p-2 md:w-auto w-full text-center md:bg-inherit bg-pink-500`}
                  >
                    <Link
                      href={ele.link}
                      className="text-white w-full block"
                    >
                      {ele.title.toUpperCase()}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
          {
            isLogged ? <FormsButton text={"Logout"} icon={<CgLogOut />} loading={false} type={"button"} clickFun={async () => {
              await fetch(`/api/logout`);
              deleteCookie("USER_AUTH_TOKEN");
              router.refresh();
            }} />

              : <FormsButton text={"Login"} icon={<CgLogIn />} loading={false} type={"button"} clickFun={() => {
                router.push("/login")
              }} />}
        </nav>
      </div>
    </header>
  );
}

