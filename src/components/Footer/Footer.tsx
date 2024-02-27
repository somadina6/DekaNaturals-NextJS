import Link from "next/link";
import { FaRegCopyright, FaFileContract } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="mt-10 mb-5 sm:text-sm md:text-[16px]">
      <section className=" h-24 md:w-full px-32 mx-auto md:flex md:flex-row sm:flex-col items-start justify-between mb-20">
        <div className="flex flex-col items-center space-y-2 w-1/5 ">
          <img src="/logo.png" style={{ width: "70%" }} />
          <p className="font-bold">Follow Us On Social Media</p>
          <div className="flex items-center justify-around ">
            <TiSocialFacebook size={32} style={{ color: "blue" }} />
            <TiSocialInstagram size={32} style={{ color: "#833ab4" }} />
          </div>
        </div>

        <div
          id="quick-links-container"
          className="flex flex-col items-center space-y-2"
        >
          <p className="font-bold">Quick Links</p>
          <Link href="/about" className="hover:font-bold">
            <p className="text-center">About Us</p>
          </Link>

          <Link href="/services" className="hover:font-bold">
            <p className="text-center">Services</p>
          </Link>

          <Link href="/products" className="hover:font-bold">
            <p className="text-center">Products</p>
          </Link>

          <Link href="/contact" className="hover:font-bold">
            <p className="text-center">Contact Us</p>
          </Link>
        </div>

        <div
          id="quick-links-container"
          className="flex flex-col items-center space-y-2"
        >
          <p className="font-bold">Quick Links</p>
          <Link href="/" className="hover:font-bold">
            <p className="text-center">Privacy Policy</p>
          </Link>

          <Link href="/" className="hover:font-bold">
            <p className="text-center">Terms & Conditions</p>
          </Link>

          <Link href="/" className="hover:font-bold">
            <p className="text-center">Disclaimer</p>
          </Link>

          <Link href="/" className="hover:font-bold">
            <p className="text-center">Cookie Policy</p>
          </Link>
        </div>

        <div
          id="contact-container"
          className="flex flex-col items-center space-y-2"
        >
          <p className="font-bold">Contact Us</p>
          <Link href="/" className="hover:font-bold">
            <p className="text-center">Contact Information</p>
          </Link>

          <Link href="/" className="hover:font-bold">
            <p className="text-center">Consultations</p>
          </Link>

          <Link href="/" className="hover:font-bold">
            <p className="text-center">Store Information</p>
          </Link>
        </div>
      </section>
      <section className="w-full mt-8 flex items-center justify-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} DekaNaturals. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
