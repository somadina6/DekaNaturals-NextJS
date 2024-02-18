"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


const navLinks = [
  "PRODUCTS",
  "SERVICES",
  "APPOINTMENT",
  "ABOUT US",
  "CONTACT US",
];

const navLinksURL: { [key: string]: string } = {
  HOME: "/",
  APPOINTMENT: "/appointment",
  "ABOUT US": "/about",
  PRODUCTS: "/products",
  "CONTACT US": "/contact",
  SERVICES: "/services",
};

const Header: React.FC = () => {

  const pathname = usePathname()
  console.log(pathname)

  useEffect(()=>{

  }, [pathname])

  return (
    <header className="w-full z-10 h-[80px] flex items-end border-b border-white justify-center py-2 sticky bg-white top-0 px-12">
      <Link className="mt-2 absolute left-10 bottom-[-10px]" href="/">
        <Image src="/logo.png" alt="Next Image" width={120} height={80} />
      </Link>
      <ul className="w-full md:w-1/2 flex items-center justify-between" >
        {navLinks.map((link) => {
          return (
            <li
              key={link}
              className={" text-[14px] text-[#1E1E1E] font-bold hover:border-b-primary hover:border-b-2 hover:text-[#6DBE45]" + `${pathname == navLinksURL[link]? 'border-b-[#6DBE45] border-b-2 text-[#6DBE45]' :''}`}
            >
              <Link href={navLinksURL[link]}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
