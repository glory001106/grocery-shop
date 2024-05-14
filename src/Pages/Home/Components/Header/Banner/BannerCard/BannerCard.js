import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const BannerCard = () => {
    return (
        <div className='pl-10'>
            <p className='font-semibold text-emerald-500'>FRESH</p>
            <h1 className='text-5xl font-bold'>100% <br /> Organic</h1>
            <p className='my-1'>Free Pickup and Delivery Available</p>
            <Link to="/shop"><Button className='rounded-none px-5 uppercase' color="success">Start shopping</Button></Link>
        </div>
    );
};

export default BannerCard;