import Image from "next/image";
import Banner_01 from "@/components/Banners/Banner_01";
import Link from "next/link";
import HomepageBanner from "@/components/Banners/HomepageBanner";
import ShowCase1 from "@/components/HomePage/ShowCase1";

export default function Home() {
  return (
    <>
      <HomepageBanner />
      <Banner_01>
        <Link href="/appointment">
          <button className="p-2 block mx-auto button-style bg-[#3f9a80]">
            Schedule An Appointment
          </button>
        </Link>
      </Banner_01>
      <ShowCase1 />
    </>
  );
}
