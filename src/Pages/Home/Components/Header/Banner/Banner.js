import React from 'react';
import BannerCard from './BannerCard/BannerCard';
import HeaderContact from './HeaderContact/HeaderContact';
import SearchBar from './SearchBar/SearchBar';
import SearchModal from './SearchModal/SearchModal';

const Banner = () => {
    return (
        <div className=''>
            <SearchModal/>
            <div className='grid md:grid-cols-4 gap-5 md:mb-5'>
                <div className='md:col-span-3'>
                    <SearchBar />
                </div>
                <HeaderContact />
            </div>
            <div className="bg-[url('https://i.ibb.co/b1LvTrY/pexels-lumn-1028599.jpg')] bg-cover lg:h-96 flex items-center h-72">
                <BannerCard />
            </div>
        </div>
    );
};

export default Banner;