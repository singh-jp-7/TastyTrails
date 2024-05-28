import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../Images/logo-black.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((store) => store.cart.items);
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between bg-slate-300">
      <div className="flex">
        <img className="w-28 mx-4 p-2" alt="Tasty Trails Logo" src={logo}></img>
        <div className="p-4 m-auto font-serif italic text-4xl">
          TastyTrails..
        </div>
      </div>
      <ul className="flex my-auto">
        <li className="p-2 m-2">{isOnline ? "🟢 " : "🔴 "}Online</li>
        <li className="p-2 m-2">
          <Link to="/">Home</Link>
        </li>
        {/* <li className="p-2 m-2">
          <Link to="/contact">Contact</Link>
        </li> */}
        <li className="p-2 m-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-2 m-2">
          <Link to="/cart">
            <span className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {items?.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
