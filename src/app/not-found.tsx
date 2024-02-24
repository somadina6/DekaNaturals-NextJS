import React from "react";
import "./style.css";
import { VscError } from "react-icons/vsc";

const customStyles = "md:text-5xl sm:text-sm";
const notfound = () => {
  return (
    <div className="h-vhcustom flex flex-col items-center space-y-4 justify-center">
      <h2 className={customStyles}>Error 404</h2>
      <h2 className={customStyles}>Page Not Found</h2>
      <VscError style={{ width: "3%", height: "auto" }} />
    </div>
  );
};

export default notfound;
