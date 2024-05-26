import logoWhite from "../Images/logoWhite.svg";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const Footer = () => {
  return (
    <div className="bg-black text-white h-80">
      <div className="relative row text-center m-auto py-4">
        Made With ❤️ in India
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col ml-28">
          <div className="font-bold">We Deliver To </div>
          <ul className=" text-gray-300">
            <li>
              <LocationOnIcon />
              Pune
            </li>
            <li>
              <LocationOnIcon />
              Jammu
            </li>
            <li>
              <LocationOnIcon />
              Ludhiana
            </li>
            <li>
              <LocationOnIcon />
              Delhi
            </li>
            <li>
              <LocationOnIcon />
              Dhanbad
            </li>
            <li>
              <GpsFixedIcon />
              And Expanding..
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="ml-20">
            <img className="w-44" src={logoWhite}></img>
            <span className="mt-0 mb-8">
              &#169; 2024 Tastytrails Foods Ltd.
            </span>
          </div>
          <div className="bottom">
            <span className="font-bold ml-36">Contact Us</span>
            <ul className="text-gray-300 text-sm flex">
              <li>
                <LinkedInIcon />
                &nbsp; LinkedIn &nbsp;
              </li>
              <li>
                <FacebookIcon />
                &nbsp; FaceBook &nbsp;
              </li>
              <li>
                <InstagramIcon />
                &nbsp; Instagram &nbsp;
              </li>
              <li>
                <XIcon />
                &nbsp; Twitter
              </li>
            </ul>
          </div>
        </div>

        <div className="flex mr-36 flex-col">
          <div className="font-bold">Team </div>
          <ul className=" text-gray-300">
            <li>
              <PersonOutlineIcon /> Jaspreet
            </li>
            <li>
              <PersonOutlineIcon /> Chandan
            </li>
            <li>
              <PersonOutlineIcon /> Inder
            </li>
            <li>
              <PersonOutlineIcon /> Charan
            </li>
            <li>
              <PersonOutlineIcon /> Sahil
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
