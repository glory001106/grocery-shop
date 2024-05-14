import React, { useContext } from 'react';
import NavBar from '../Shared/Navbar/NavBar';
import Foot from '../Shared/Footer/Foot';
import useTitle from '../../Title/useTitle';
import OrderSummery from '../OrderSummery/OrderSummery';
import ReviewItems from '../ReviewItems/ReviewItems';
import { ProductContext } from '../../contexts/ProductsProvider';

const Review = () => {
    const { cartProducts } = useContext(ProductContext);
    useTitle("Review");

    return (
        <div>
            <NavBar />
            <div className='mt-5'>
                <div className='md:flex'>
                    <div className='w-10/12 sm:w-7/12 md:w-6/12 lg:w-6/12 xl:w-4/12 mx-auto mb-10'>
                        {
                            cartProducts.length ?
                                <div>
                                    {
                                        cartProducts.map(product =>
                                            <ReviewItems key={product.id} product={product}></ReviewItems>
                                        )
                                    }
                                </div>
                                :
                                <div>
                                    <img className='w-11/12 mx-auto' src="https://i.ibb.co/Xt7vHqM/Ice-cream-seller-amico.png" alt="" />
                                    <p className='text-center text-orange-500 text-2xl font-bold'>No items found. Please add items to review!!!</p>
                                </div>
                        }
                    </div>
                    <div className="w-10/12 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mx-auto border bg-slate-100">
                        <OrderSummery />
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    );
};

export default Review;