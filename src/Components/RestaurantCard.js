import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, costForTwo, cuisines, avgRatingString, cloudinaryImageId } =
    resData;

  return (
    <div className="m-4 p-4 w-[255px] bg-gray-100 hover:bg-slate-200 min-h-[400px]">
      <img
        className="w-[240px] rounded-lg h-48 justify-center"
        alt="Restaurant"
        src={IMG_URL + cloudinaryImageId}
      ></img>
      <div className="w-52 py-4">
        <h1 className="font-bold text-lg">{name}</h1>
        <h3 className="break-words justify-center">{cuisines?.join(", ")}</h3>
        <h2 className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#5ceb57"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="none"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          {" " + avgRatingString}
        </h2>
        <h2 className="font-bold text-sm">{costForTwo}</h2>
      </div>
    </div>
  );
};

export default RestaurantCard;

export const PromotedCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="text-white font-extrabold absolute mt-44 ml-10 tracking-tighter text-xl">
          {props.resData.aggregatedDiscountInfoV3.header +
            " " +
            props.resData.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
