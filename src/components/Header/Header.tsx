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
    <header className="w-full h-20 flex items-center border-b-2 border-gray-400 justify-between py-2 sticky bg-white top-0 px-12">
      <ul className="w-full md:w-3/5 flex items-center justify-between">
        {navLinks.map((link) => {
          return (
            <li
              key={link}
              className="w-1/ text-lg hover:border-b-black hover:border-b-2"
            >
              <Link href={navLinksURL[link]}>{link}</Link>
            </li>
          );
        })}
      </ul>

      <Link className="mt-2" href="/">
        <Image src="/logo.png" alt="Next Image" width={120} height={80} />
      </Link>
    </header>
  );
};

export default Header;
