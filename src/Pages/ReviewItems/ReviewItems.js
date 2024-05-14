import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { ProductContext } from '../../contexts/ProductsProvider';
import { removeFromDb } from '../../cartManagement/cartManagement';

const ReviewItems = ({product}) => {
    const {img, name, quantity, price} = product;
    const { cartProducts, setCartProducts } = useContext(ProductContext);

    const removeCartItem = (id) =>{
        const remaining = cartProducts.filter(product => product.id !== id);
        setCartProducts(remaining);
        removeFromDb(id, "cart");
    }

    return (
        <div className='border flex mb-2 rounded-lg'>
            <div>
                <img className='h-20 w-28 rounded-tl-lg rounded-bl-lg' src={img} alt="" />
            </div>
            <div className='flex justify-between w-full px-5 items-center'>
                <div>
                    <p className='font-semibold'>{name}</p>
                    <p>Price : $ {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                <button className='p-2 rounded-full bg-red-100 hover:text-orange-400 text-red-600 text-3xl' onClick={()=>removeCartItem(product.id)}><FaTrashAlt/></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;