import { IMG_URL } from "../utils/constants";

const RestaurantMenu = ({ resData }) => {
  const { name, costForTwo, cuisines, avgRatingString, cloudinaryImageId } =
    resData;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-slate-200">
      <img
        className="w-48 rounded-lg h-48"
        alt="Restaurant"
        src={IMG_URL + cloudinaryImageId}></img>
      <div className="w-52"> 
        <h1 className="font-bold text-lg">{name}</h1>
        <h3 className="text-wrap">{cuisines?.join(",")}</h3>
        <h2>{avgRatingString}</h2>
        <h2>{costForTwo}</h2>
      </div>
    </div>
  );
};

export default RestaurantMenu;
