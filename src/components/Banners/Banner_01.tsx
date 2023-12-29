import React, { Children } from "react";

const Banner_01 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex bg-[#6dbe45] flex-col items-center justify-evenly py-10 h-64 text-lg">
      <h2 className="text-white text-2xl font-semibold">
        From Earth to Health: Embrace Herbal Healing
      </h2>
      <h2 className="text-white ">Discover the Power of Herbal Remedies.</h2>
      {children}
    </div>
  );
};

export default Banner_01;
