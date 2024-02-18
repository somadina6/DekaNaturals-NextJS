import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const HomepageBanner = () => {
  return (
    <div>
      <div className="h-[460px] overflow-hidden w-full mb-16">
        <Image className="relative bottom-[300px]" src="/cover.jpg" alt="cover photo" width={1920} height={320} />
      </div>
      <div className="flex w-full mx-auto flex-col text-white items-center space-y-2 h-1/3 absolute top-[210px]">
        <h1 className="text-2xl font-bold">
          Rooted in Nature, Thriving in Wellness
        </h1>
        <p className="font-arial">Deka Herbs, Where Healing Begins Naturally</p>
        
        <ButtonPrimary><Link href="/appointment">Learn More</Link></ButtonPrimary>
      </div>
    </div>
  );
};

export default HomepageBanner;
