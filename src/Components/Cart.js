import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import SadEmoji from "../Images/SadEmoji.png"
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const removeFromCart = (data) => {
    dispatch(removeItem(data));
  };

  const emptyCart = () => {
    dispatch(clearCart());
  };

  if (items?.length === 0) {
    return (
      <div className="text-center m-4">
        <p className="italic font-bold text-lg">Oh No! Looks like you are not Hungry.</p>
        <img className="size-60 m-auto" src={SadEmoji}></img>
        <h1>Visit Homepage for something delicious!</h1>
      </div>
    );
  }

  return (
    <div className="w-6/12 m-auto p-8 relative flex flex-col">
      <button
        className=" w-auto ml-4 mb-8 justify-right px-8 py-2 bg-gray-200 rounded-md"
        onClick={emptyCart}
      >
        Empty Cart
      </button>
      <div>
        {items?.map((item, index) => {
          return (
            <ItemList
              key={item?.card?.info?.id}
              dish={item}
              addItemToCart={removeFromCart}
              buttonText="Del-"
            />
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
