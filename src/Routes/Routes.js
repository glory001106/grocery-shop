import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from '../Pages/Home/Components/Home/Home';
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import Review from "../Pages/Review/Review";
import PrivateRoutes from "./PrivateRoutes";
const LazyShop = React.lazy(()=>import("../Pages/Shop/Shop"));

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/shop',
                element:<React.Suspense fallback="Loading..."><LazyShop/></React.Suspense>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/checkout',
                element:<CheckOut/>
            },
            {
                path:'*',
                element:<NotFound/>
            },
        ]
    },
    {
        path:'/review',
        element:<PrivateRoutes><Review/></PrivateRoutes>
    }
]);