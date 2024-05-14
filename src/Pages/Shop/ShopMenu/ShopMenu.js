import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../../contexts/ProductsProvider';

const ShopMenu = () => {

    const { handleMenuProduct } = useContext(ProductContext);

    const nav = [
        {
            id: 9,
            type: "all",
            name: "All"
        },
        {
            id: 1,
            type: "meat",
            name: "Meat"
        },
        {
            id: 2,
            type: "vegetables",
            name: "Vegetables"
        },
        {
            id: 3,
            type: "fruits",
            name: "Fruits"
        },
        {
            id: 4,
            type: "sea",
            name: "Sea-Food"
        },
        {
            id: 5,
            type: "fish",
            name: "Fish"
        },
        {
            id: 6,
            type: "herb",
            name: "Herbs & Spices"
        },
        {
            id: 7,
            type: "oil",
            name: "Cooking-Oil"
        },
        {
            id: 8,
            type: "ice-cream",
            name: "Ice-cream"
        }
    ]

    return (
        <nav className='text-center my-8 flex-wrap flex justify-center'>
            {
                nav.map(n =>
                    <p key={n.id} onClick={()=>handleMenuProduct(n.type)} className='mx-3 lg:mx-5 h-10 font-semibold text-emerald-500 cursor-pointer hover:text-black'>{n.name}</p>
                )
            }
        </nav>
    );
};

export default ShopMenu;