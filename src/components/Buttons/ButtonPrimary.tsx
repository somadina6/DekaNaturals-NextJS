import React from "react";

const ButtonPrimary = ({ children }: { children: React.ReactNode }) => {
  console.log(children);
  return (
    <button className="button-style block mx-auto mt-2">{children}</button>
  );
};

export default ButtonPrimary;
