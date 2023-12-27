import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between px-8">
      <ul className="w-full md:w-2/3 flex justify-between p-4">
        <li>
          <Link href="/" className="text-md font-bold hover:border-b-green-500">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/" className="text-md font-bold hover:border-b-green-500">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/" className="text-md font-bold hover:border-b-green-500">
            PRODUCTS
          </Link>
        </li>
      </ul>

      <Image src="/next.svg" alt="Next Image" width={20} height={20} />
    </header>
  );
};

export default Header;
