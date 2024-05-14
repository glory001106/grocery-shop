import React, { useContext } from 'react';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { ProductContext } from '../../../../contexts/ProductsProvider';
import ProductCard from '../../../Shop/ProductCard';
import useTitle from '../../../../Title/useTitle';

const FeatureItem = () => {

    const { products, categoryProducts } = useContext(ProductContext);


    const handleGoTop = () => {
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = () => { scrollFunction() };
    const scrollFunction = () => {
        if (document.documentElement.scrollTop > 50) {
            document.getElementById("top-btn").style.display = "block";
        }
        else {
            document.getElementById("top-btn").style.display = "none";
        }
    }

    let items = products.slice(30, 38);
    if (categoryProducts.length) {
        items = categoryProducts;
    }

    return (
        <div id='feature-items' className='my-20'>
            <div className='group'>
                <h1 className='text-center text-4xl font-semibold'>Feature Products</h1>
                <hr className='w-2/12 md:w-1/12 mx-auto h-1 bg-emerald-500 md:group-hover:w-2/12 group-hover:w-8/12 transition-width duration-500 ease-in-out mt-2'></hr>
            </div>
            <div className='grid w-9/12 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto mt-10'>
                {
                    items.map(product =>
                        <ProductCard
                            key={product.id}
                            product={product}>
                        </ProductCard>)
                }
            </div>
            <div id='top-btn' className='animate-bounce hover:animate-none fixed bottom-5 right-5 shadow-lg rounded-full shadow-black'>
                <span className='text-4xl text-black hover:text-orange-500 hover:cursor-pointer' onClick={handleGoTop}><FaRegArrowAltCircleUp /></span>
            </div>
        </div>
    );
};

export default FeatureItem;