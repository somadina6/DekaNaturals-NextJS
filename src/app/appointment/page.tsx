import React from "react";
import Appointment from "@/components/Appointment/Appointment";
import Banner_01 from "@/components/Banners/Banner_01";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <div className=" bg-gradient-linear w w-lvw">
      {/* <Banner_01>
          <a href="#form">
            <p className="button-style">Schedule Appointment Below</p>
          </a>
        </Banner_01> */}
      <Appointment />
    </div>
  );
};

export default page;
