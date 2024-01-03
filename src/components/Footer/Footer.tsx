import Link from "next/link";
import { FaRegCopyright, FaFileContract } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import Image from "next/image";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer className=" h-24 w-full flex flex-col items-center ">
      <div className="w-1/2 flex flex-col lg:flex-row items-center justify-between mb-0">
        <Link href="/">
          <span className="flex items-center py-4">
            <FaRegCopyright />
            <p className="ml-1">Deka Naturals</p>
          </span>
        </Link>

        <Link href="/">
          <span className="flex items-center py-4">
            <FaFileContract />
            <p className="ml-1">Terms & Conditions</p>
          </span>
        </Link>

        <Link href="/">
          <span className="flex items-center py-4">
            <MdOutlinePrivacyTip />
            <p className="ml-1">Privacy Policy</p>
          </span>
        </Link>
      </div>
      <div className="flex justify-between items-center px-2 py-1 w-1/4">
        <Link className="mt-0" href="/">
          <Image src="/logo.png" alt="Next Image" width={120} height={80} />
        </Link>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
