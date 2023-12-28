import Image from "next/image";
import Banner_01 from "@/components/Banner_01/Banner_01";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Banner_01
        children={
          <>
            <Link href="/appointment">
              <button className="p-2 block mx-auto bg-green-600 text-white">
                Schedule An Appointment
              </button>
            </Link>
          </>
        }
      ></Banner_01>
    </>
  );
}
