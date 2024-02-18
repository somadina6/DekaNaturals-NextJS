import Image from "next/image";
import Banner_01 from "@/components/Banners/Banner_01";
import Link from "next/link";
import HomepageBanner from "@/components/Banners/HomepageBanner";
import ShowCase1 from "@/components/HomePage/ShowCase1";

export default function Home() {
  return (
    <>
      <HomepageBanner />
      <Banner_01/>
      <ShowCase1 />
    </>
  );
}
