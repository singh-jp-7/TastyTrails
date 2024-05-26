import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import RestaurantCard from "./src/Components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom"

const About = lazy(() => import("./src/Components/About"));
const Cart = lazy(()=> import("./src/Components/Cart"))

const AppBody = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppBody />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: (
                        <Suspense fallback={<h1>Loading App...</h1>}>
                            <About />
                        </Suspense>
                    )
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/cart",
                    element: (
                        <Suspense fallback={<h1>Loading Cart...</h1>}>
                            <Cart />
                        </Suspense>
                    )
                },
                {
                    path: "/restaurant/:resId",
                    element: <RestaurantCard />
                }
            ],
            errorElement: <Error/>
        }
    ])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {appRouter} />)