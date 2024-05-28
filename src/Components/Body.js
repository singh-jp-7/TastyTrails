import React, { useState, useEffect } from "react";
import RestaurantCard, { PromotedCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import DishTypes from "./DishTypes";
import useRestaurantData from "../utils/useRestaurantsData";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);

  const [searchText, setSearchText] = useState("");
  const resInfo = useRestaurantData();
  const dishTypes =
    resInfo?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
  const resLists =
    resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  useEffect(() => {
    setListOfRestaurants(resLists);
    setSearchedItems(resLists);
  }, [resLists]);

  const PromotedRestaurantCard = PromotedCard(RestaurantCard);
  return resLists?.length !== 0 ? (
    <div className="mx-36">
      <div className="ml-12 mt-6">
        <span className="p-2 m-4 font-bold text-3xl">
          Categories You Might Like
        </span>
        <DishTypes dishTypes={dishTypes} />
      </div>
      <div className="flex ml-12">
        <input
          placeholder="Search"
          className="px-2 m-4 border-gray border-2 rounded-lg"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="m-4 bg-slate-300 rounded-lg px-4 py-1 shadow-lg"
          onClick={() => {
            const searchedRestaurants = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchedItems(searchedRestaurants);
          }}
        >
          Search
        </button>
        <button className="m-4 bg-slate-300 rounded-lg px-1 shadow-lg">
          <div className="flex content-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="py-1 size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            Filter Items
          </div>
        </button>
      </div>
      <span className="ml-12 p-4 font-bold text-3xl">
        Top Restaurants In Your Location
      </span>
      <div className="flex mx-4 p-4 flex-wrap justify-center">
        {searchedItems?.map((resList) => {
          return (
            <Link key={resList.info.id} to={"/restaurant/" + resList.info.id}>
              {resList?.info?.aggregatedDiscountInfoV3 &&
              Object.keys(resList?.info?.aggregatedDiscountInfoV3).length >
                0 ? (
                <PromotedRestaurantCard resData={resList.info} />
              ) : (
                <RestaurantCard key={resList.info.id} resData={resList?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};
export default Body;
