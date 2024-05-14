import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Link className='btn btn-primary px-10 mt-5' to="/">Go Home</Link>
            <div className="w-10/12 md:w-8/12 lg:w-5/12 mx-auto">
            <img src="https://i.ibb.co/vDc9456/404-Error-Page-not-Found-with-people-connecting-a-plug-bro-1.png" alt="" />
        </div>
        </div>
    );
};

export default NotFound;