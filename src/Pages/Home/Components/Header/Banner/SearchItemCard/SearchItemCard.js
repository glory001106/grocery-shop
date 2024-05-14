import React, { useContext } from 'react';
import { ProductContext } from '../../../../../../contexts/ProductsProvider';
import { BsBagDash } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SearchItemCard = () => {
    const { searchedItem, handleAdd } = useContext(ProductContext);
    const { id, img, name, price } = searchedItem;

    const iconStyle = "mx-2 p-3 bg-white rounded-full hover:bg-orange-500 hover:text-white";

    return (
        <div id='search-item-card' className='group'>
            <img className='rounded-xl mx-auto' src={img} alt={name} />
            <div className='text-2xl group-hover:flex justify-center hidden -mt-12'>
                <span onClick={() => handleAdd(id, "fav")} className={iconStyle}><AiOutlineHeart /></span>
                <span onClick={() => handleAdd(id, "cart")} className={iconStyle}><BsBagDash /></span>
            </div>
            <div className='text-center font-bold mt-2 pb-3'>
                <p className='text-xl'>{name}</p>
                <p>${price}.00</p>
            </div>
            <div className="absolute bottom-2 w-11/12 left-0 right-0 mx-auto">
                <Link to='/shop'><label htmlFor="cart-modal" className="btn w-full bg-success border-0">Shop More</label></Link>
            </div>
        </div>
    );
};

export default SearchItemCard;