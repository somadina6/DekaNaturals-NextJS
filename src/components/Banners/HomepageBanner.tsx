import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomepageBanner = () => {
  return (
    <div>
      <div className="h-80 overflow-hidden w-full mb-16">
        <Image src="/cover.jpg" alt="cover photo" width={1920} height={320} />
      </div>
      <div className="flex w-full mx-auto flex-col text-white items-center justify-evenly h-1/3 absolute top-[120px]">
        <h1 className="text-2xl font-bold">
          Rooted in Nature, Thriving in Wellness
        </h1>
        <h2 className="text-xl">Deka Herbs, Where Healing Begins Naturally</h2>
        <Link href="/appointment">
          <button className="p-2 button-style block mx-auto">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomepageBanner;
