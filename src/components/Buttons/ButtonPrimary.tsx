import React from "react";

const ButtonPrimary = ({ children }: { children: string }) => {
  return (
    <button className="button-style block mx-auto mt-2">{children}</button>
  );
};

export default ButtonPrimary;
