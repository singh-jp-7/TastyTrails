import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const ItemCard = ({ item }) => {
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();

  const addItemToCart = (dish) => {
    dispatch(addItem(dish));
  };
  return (
    <div className="border-b-2 py-6 px-4 shadow-lg bg-gray-100">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <h1 className="font-bold text-xl">{item.card.card.title}</h1>
        {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {expand && (
        <div className="flex flex-col py-2">
          {item?.card?.card?.itemCards?.map((dish) => {
            return <ItemList key={dish?.card?.info?.id} dish={dish} addItemToCart={addItemToCart} buttonText="Add+" />
          })}
        </div>
      )}
    </div>
  );
};

export default ItemCard;
