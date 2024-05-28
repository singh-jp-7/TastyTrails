import { IMG_URL } from "../utils/constants";

const ItemList = ({dish, addItemToCart, buttonText}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="p-4 w-9/12">
        <h1 className="font-semibold ">{dish?.card?.info?.name}</h1>
        <h2 className="font-semibold">
          ₹ {(dish?.card?.info?.price ?? dish?.card?.info?.finalPrice ?? dish?.card?.info?.defaultPrice) / 100}
        </h2>
        <span>
          <p className=" text-xs">{dish?.card?.info?.description}</p>
        </span>
        <hr />
      </div>
      <div className="relative w-20 h-20 m-6">
        <button
          className="absolute bg-gray-100 rounded-sm mb-1 px-1 top-16 left-4"
          onClick={() => {
            addItemToCart(dish);
          }}
        >
          {buttonText}
        </button>
        <img
          src={IMG_URL + dish?.card?.info?.imageId}
          className="w-20 h-20 rounded-lg"
        ></img>
      </div>
    </div>
  );
};

export default ItemList;
