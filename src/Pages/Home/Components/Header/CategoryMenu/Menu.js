import { Accordion } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaBars } from "react-icons/fa";
import { ProductContext } from '../../../../../contexts/ProductsProvider';

const Menu = () => {

    const { handleMenuProduct } = useContext(ProductContext);

    const category = [
        {
            id: 1,
            type: "meat",
            name: "Fresh Meat"
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
            name: "Sea Food"
        },
        {
            id: 5,
            type: "fish",
            name: "Fish"
        },
        {
            id: 6,
            type: "herb",
            name: "Herbs and spices"
        },
        {
            id: 7,
            type: "oil",
            name: "Cooking Oil"
        },
        {
            id: 8,
            type: "ice-cream",
            name: "Ice cream"
        }
    ]

    return (
        <div className='group'>
            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title className='bg-emerald-400 h-14'>
                        <div className='flex items-center'>
                            <span><FaBars /></span>
                            <p className='ml-5'>All Category</p>
                        </div>
                    </Accordion.Title>
                    <Accordion.Content>
                        <ul>
                            {
                                category.map(c =>
                                    <li onClick={() => handleMenuProduct(c.type)}  key={c.id} className='pt-5 font-semibold hover:text-emerald-500 hover:cursor-pointer'>
                                        <a href='#feature-items' >{c.name}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Menu;