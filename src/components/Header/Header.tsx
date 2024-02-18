import React from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = ["HOME", "APPOINTMENT", "ABOUT", "PRODUCTS", "CONTACT US"];

const navLinksURL: { [key: string]: string } = {
  HOME: "/",
  APPOINTMENT: "/appointment",
  ABOUT: "/about",
  PRODUCTS: "/products",
  "CONTACT US": "/contact",
};

const Header: React.FC = () => {
  return (
    <header className="w-full z-10 h-16 flex items-center border-b border-gray-400 justify-between py-2 sticky bg-white top-0 px-12">
      <Link className="mt-2" href="/">
        <Image src="/logo.png" alt="Next Image" width={120} height={80} />
      </Link>
      <ul className="w-full md:w-3/5 flex items-center justify-between">
        {navLinks.map((link) => {
          return (
            <li
              key={link}
              className=" text-[15px] hover:border-b-primary hover:border-b-2 hover:font-semibold"
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
