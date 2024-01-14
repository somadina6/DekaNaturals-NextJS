import React from "react";

type ButtonPrimaryProps = {
  text: string;
};

const ButtonPrimary = ({ children }: { children: ButtonPrimaryProps }) => {
  console.log(children);
  return (
    <button className="button-style block mx-auto mt-2">{children.text}</button>
  );
};

export default ButtonPrimary;
