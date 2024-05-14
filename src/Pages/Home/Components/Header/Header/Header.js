import React from 'react';
import Banner from '../Banner/Banner';
import Menu from '../CategoryMenu/Menu';

const Header = () => {
    return (
        <div>
            <div className='grid md:grid-cols-8 w-11/12 md:w-9/12 mx-auto mt-5 gap-5'>
                <div className='md:col-span-2'>
                    <Menu/>
                </div>
                <div className='md:col-span-6'>
                    <Banner/>
                </div>
            </div>
        </div>
    );
};

export default Header;