import React from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = ["HOME", "APPOINTMENT", "ABOUT", "PRODUCTS", "CONTACT"];

const navLinksURL: { [key: string]: string } = {
  HOME: "/",
  APPOINTMENT: "/appointment",
  ABOUT: "/about",
  PRODUCTS: "/products",
  CONTACT: "/contact",
};

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between px-8">
      <ul className="w-full md:w-3/5 flex justify-between p-4">
        {navLinks.map((link) => {
          return (
            <li
              key={link}
              className="text-lg hover:border-b-black hover:border-b-2"
            >
              <Link href={navLinksURL[link]}>{link}</Link>
            </li>
          );
        })}
      </ul>

      <Image src="/next.svg" alt="Next Image" width={100} height={100} />
    </header>
  );
};

export default Header;
