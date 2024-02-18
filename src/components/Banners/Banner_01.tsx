import React, { Children } from "react";
import ButtonPrimary2 from "../Buttons/ButtonPrimary2";
import Link from "next/link";


const Banner_01 = () => {
  return (
    <div className="w-full flex bg-primary flex-col items-center space-y-1 justify-evenly py-10 h-64 ">
      <h2 className="text-white text-2xl font-semibold m-0 p-0">
        From Earth to Health: Embrace Herbal Healing
      </h2>
      <h2 className="text-white text-lg m-0 p-0">
        Discover the Power of Herbal Remedies.
      </h2>
     
      <Link href="/appointment">
          <ButtonPrimary2>Schedule An Appointment</ButtonPrimary2>
        </Link>
    </div>
  );
};

export default Banner_01;
