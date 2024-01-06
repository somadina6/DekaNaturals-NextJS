import Link from "next/link";
import { FaRegCopyright, FaFileContract } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <footer>
      <section className=" h-24 w-full md:w-1/2 mx-auto flex items-center justify-between mt-5">
        <div className="flex flex-col items-start justify-between">
          <p className="ml-1 pb-2">Important Links</p>
          <Link href="/" className="hoverbold">
            <span className="flex items-center pb-4">
              <FaFileContract />
              <p className="ml-1">Terms & Conditions</p>
            </span>
          </Link>

          <Link href="/" className="hoverbold">
            <span className="flex items-center pb-4">
              <MdOutlinePrivacyTip />
              <p className="ml-1">Privacy Policy</p>
            </span>
          </Link>
        </div>

        <div className="  flex flex-col justify-between items-start">
          <h5 className="ml-1 pb-2">Connect with us:</h5>
          <div className="flex items-center hoverbold pb-4">
            <TiSocialFacebook />
            <p className="ml-1">Facebook</p>
          </div>
          <div className="flex items-center hoverbold pb-4">
            <TiSocialInstagram />
            <p className="ml-1">Instagram</p>
          </div>
        </div>
      </section>
      <section className="w-full h-4 flex items-center justify-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} DekaNaturals. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
