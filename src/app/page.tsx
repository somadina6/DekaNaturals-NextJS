import Image from "next/image";
import Banner_01 from "@/components/Banners/Banner_01";
import Link from "next/link";
import HomepageBanner from "@/components/Banners/HomepageBanner";

export default function Home() {
  return (
    <>
      <HomepageBanner />
      <Banner_01
        children={
          <>
            <Link href="/appointment">
              <button className="p-2 block mx-auto button-style">
                Schedule An Appointment
              </button>
            </Link>
          </>
        }
      ></Banner_01>
    </>
  );
}
