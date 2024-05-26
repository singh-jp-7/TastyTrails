import { useEffect, useState } from "react";
import { REST_URL } from "./constants";

// This Hook returns the restaurant Menu Data.
const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  const fetchRestaurantMenu = async () => {
    const menuData = await fetch(REST_URL + resId);
    const json = await menuData.json();
    setRestaurantMenu(json?.data);
  };

  return restaurantMenu;
};

export default useRestaurantMenu;
