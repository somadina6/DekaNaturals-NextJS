import React from "react";

const ButtonPrimary = ({ props }: { props: { text: string } }) => {
  return (
    <button className="button-style block mx-auto mt-2">{props.text}</button>
  );
};

export default ButtonPrimary;
