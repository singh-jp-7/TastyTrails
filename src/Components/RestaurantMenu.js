import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [ menuItems, setMenuItems ] = useState(null);
  const restaurantMenu = useRestaurantMenu(resId);

  useEffect(()=>{
    if ( restaurantMenu ){
      const menu = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item) => item?.card.card?.["@type"].includes(".ItemCategory"))
      setMenuItems(menu)
    }
  }, [restaurantMenu])

  return (
    <div className="flex w-6/12 m-auto flex-col my-4">
      <h1 className="mx-6 font-bold text-2xl justify-start">
        {restaurantMenu?.cards[0]?.card?.card?.text}
      </h1>
      <div className="shadow-xl m-4 p-4 bg-gray-100 border-2 rounded-lg">
        <span className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#04bd1c"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        {restaurantMenu?.cards[2]?.card?.card.info?.avgRatingString + " (" + restaurantMenu?.cards[2]?.card?.card.info?.totalRatingsString + ") " +"• "  + restaurantMenu?.cards[2]?.card?.card.info?.costForTwoMessage}
        </span>
        <div>
          {restaurantMenu?.cards[2]?.card?.card.info?.cuisines?.join(", ")}
        </div>
      </div>
      {menuItems?.map((menuItem) => {return <ItemCard key={menuItem.card.card.title} item={menuItem} />})}
    </div>
  );
};

export default RestaurantMenu;
