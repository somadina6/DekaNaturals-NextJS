import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

const Socials: React.FC = () => {
  return (
    <div className="flex flex-col justify-normal items-start">
      <div className="flex items-center ">
        <TiSocialFacebook />
        <p className="ml-1">Deka Naturals</p>
      </div>
      <div className="flex items-center">
        <TiSocialInstagram />
        <p className="ml-1">dekanaturals</p>
      </div>
    </div>
  );
};

export default Socials;
