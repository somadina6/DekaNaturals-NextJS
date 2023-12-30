import Link from "next/link";
import { FaRegCopyright, FaFileContract } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" h-24 w-full flex flex-col items-center ">
      <div className="w-1/2 flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center py-4">
            <FaRegCopyright />
            <p className="ml-2">Deka Naturals</p>
          </span>
        </Link>

        <Link href="/">
          <span className="flex items-center py-4">
            <FaFileContract />
            <p className="ml-2">Terms & Conditions</p>
          </span>
        </Link>

        <Link href="/">
          <span className="flex items-center py-4">
            <MdOutlinePrivacyTip />
            <p className="ml-2">Privacy Policy</p>
          </span>
        </Link>
      </div>
      <Link className="mt-1" href="/">
        <Image src="/logo.png" alt="Next Image" width={120} height={80} />
      </Link>
    </footer>
  );
};

export default Footer;
