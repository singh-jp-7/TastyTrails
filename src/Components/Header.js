import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../Images/logo-no-background.svg"
import { Link } from "react-router-dom";

const Header = () => {
    const isOnline = useOnlineStatus();
    return (
    <div className="flex justify-between bg-pink-100">
        <img className="w-20" alt="Tasty Trails Logo" src={logo}></img>
            <ul className="flex"> 
                <li className="p-4 m-4">{isOnline? "🟢 " : "🔴 "}Online</li>
                <li className="p-4 m-4"><Link to="/">Home</Link></li>
                <li className="p-4 m-4"><Link to="/contact">Contact</Link></li>
                <li className="p-4 m-4"><Link to="/about">About Us</Link></li>
                <li className="p-4 m-4"><Link to="/cart">Cart</Link></li>
            </ul>
    </div>
    )
}

export default Header;