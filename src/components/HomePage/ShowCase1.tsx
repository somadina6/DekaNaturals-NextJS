import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const ShowCase1: React.FC = () => {
  return (
    <div>
      <div className="flex w-4/5 border m-6 rounded-[20px] rounded-br-[170px] mx-auto">
        <div className="w-1/3 flex items-center justify-center">
          <h1>Image</h1>
        </div>
        <div className="w-3/5 flex flex-col items-center p-10 space-y-2">
          <h2 className="text text-primary text-lg italic">
            Therapeutic Herbal Teas
          </h2>
          <p className="leading-7 italic">
            Indulge in the tranquility of our therapeutic herbal tea, a blend
            carefully crafted to soothe both body and mind. Our teas are
            designed to promote a sense of{" "}
            <strong>calm and aid in digestion</strong>, making it an ideal
            companion for moments of self-care. Elevate your well-being with the
            natural goodness of our therapeutic herbal tea.
          </p>
          <ButtonPrimary>Shop Now</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ShowCase1;
