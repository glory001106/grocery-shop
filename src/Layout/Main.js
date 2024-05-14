import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/Navbar/NavBar'
import Foot from '../Pages/Shared/Footer/Foot';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Foot/>
        </div>
    );
};

export default Main;