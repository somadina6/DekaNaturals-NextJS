import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

const Socials: React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly items-center">
      <h5>Connect with us:</h5>
      <div className="flex items-center ">
        <TiSocialFacebook />
        <p className="ml-1">Facebook</p>
      </div>
      <div className="flex items-center">
        <TiSocialInstagram />
        <p className="ml-1">Instagram</p>
      </div>
    </div>
  );
};

export default Socials;
