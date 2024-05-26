import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);
  console.log("restaurantMenu", restaurantMenu)
  return (
    <div className="flex justify-center">
      <h1>{restaurantMenu?.cards[0]?.card?.card?.text}</h1>
      <div className="shadow-lg">
        <h2>{restaurantMenu?.cards[2]?.card?.card.info?.avgRatingString}</h2>
      </div>
    </div>
  );
};

export default RestaurantMenu;
