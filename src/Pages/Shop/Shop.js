import React, { useContext } from 'react';
import Cart from '../../Pages/Cart/Cart';
import { ProductContext } from '../../contexts/ProductsProvider';
import ProductCard from './ProductCard';
import ShopMenu from './ShopMenu/ShopMenu';
import useTitle from '../../Title/useTitle';

const Shop = () => {
    
    const {products, categoryProducts} = useContext(ProductContext);
    useTitle("Shop");

    let items = products;
    if (categoryProducts.length) {
        items = categoryProducts;
    }

    return (
        <div className='my-10'>
            <Cart />
            <div className='group'>
                <h1 className='text-center text-4xl font-semibold'>Products</h1>
                <hr className='w-2/12 md:w-1/12 mx-auto h-1 bg-emerald-500 md:group-hover:w-2/12 group-hover:w-5/12 transition-width duration-500 ease-in-out mt-2'></hr>
            </div>
            <ShopMenu/>
            <div className='grid w-11/12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mx-auto'>
                {
                    items.map(product => <ProductCard key={product.id} product={product}></ProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;