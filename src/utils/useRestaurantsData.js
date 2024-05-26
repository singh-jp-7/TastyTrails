import { useState, useEffect } from "react";
import { DATA_URL } from "./constants";

// This Hook returns the Restaurants Data.
const useRestaurantData = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(DATA_URL);
    const json = await data.json();
    setResData(json?.data);
  };

  return resData;
};

export default useRestaurantData;
