import { useState, useEffect } from "react";

// This Hook checks the user Connection Status
const useOnlineStatus = () => {
    const [isOnline, setIsOnline ] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {setIsOnline(false)});
        window.addEventListener("online", () => {setIsOnline(true)})
    }, [])

    return isOnline
};

export default useOnlineStatus;