import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const ShowCase1: React.FC = () => {
  return (
    <div>
      <div className=" md:flex w-4/5 h-80 border m-6 rounded-[20px] rounded-br-[170px] mx-auto">
        <div className="w-1/3 hidden md:flex items-center justify-center overflow-hidden">
          <img src="/tea.jpg" />
        </div>
        <div className="w-full md:w-3/5 flex flex-col items-center p-10 space-y-2">
          <h2 className="text text-primary text-lg italic">
            Therapeutic Herbal Teas
          </h2>
          <p className="leading-7 italic">
            Indulge in the tranquility of our therapeutic herbal tea, a blend
            carefully crafted to soothe both body and mind. Our teas are
            designed to promote a sense of{" "}
            <div className="hidden md:inline">
              <strong>calm and aid in digestion</strong>, making it an ideal
              companion for moments of self-care. Elevate your well-being with
              the natural goodness of our therapeutic herbal tea.
            </div>
          </p>
          <ButtonPrimary>Shop Now</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ShowCase1;
