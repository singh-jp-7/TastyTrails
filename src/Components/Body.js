import React, { useState, useEffect } from "react";
import RestaurantMenu from "./RestaurantMenu";
import useRestaurantData from "../utils/useRestaurantsData";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Body = () => {
  const resInfo = useRestaurantData();
  console.log("resInfo", resInfo)
  const resLists =
    resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return (
    <div className="flex m-4 p-4 flex-wrap">
      {/* <input type="text"></input> */}
      {resLists?.map((resList) => {
        return <Link key={resList.info.id} to={"/restaurant/" + resList.info.id} >
          <RestaurantMenu key={resList.info.id} resData={resList?.info} />
        </Link>
      })}
    </div>
  );
};
export default Body;
