import React from 'react';
import { FaRegComment } from "react-icons/fa";
import { BsCalendarDay } from "react-icons/bs";

const FeatureBlog = () => {

    const blogs = [
        {
            id:1,
            img:"https://i.ibb.co/jgck8F2/garlic.jpg",
            title:"Benefit of eating Garlic",
            text:"Garlic is a highly nutritious and flavorful food that has been used for both culinary and medicinal purposes for thousands of years.",
            date:"May 4,2022",
            comments:"11"
        },
        {
            id:2,
            img:"https://i.ibb.co/FDcR3Wn/cinamon.jpg",
            title:"Benefit of cinnamon",
            text:"Cinnamon is a popular spice that has been used for centuries for both culinary and medicinal purposes.",
            date:"Feb 10,2023",
            comments:"18"
        },
        {
            id:3,
            img:"https://i.ibb.co/6Yrv7Ty/coriender.jpg",
            title:"Benefit of eating herbs",
            text:"Coriander, also known as cilantro or Chinese parsley, is an herb commonly used in cooking and traditional medicine.",
            date:"Jan 28,2022",
            comments:"8"
        },
    ]
    return (
        <div>
            <div className='group'>
                <h1 className='text-4xl text-center font-semibold'>Health Tips</h1>
                <hr className='w-2/12 md:w-1/12 mx-auto h-2 bg-emerald-500 mt-3 md:group-hover:w-2/12 group-hover:w-5/12 transition-width duration-500 ease-in-out'></hr>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 w-10/12 md:w-8/12 lg:w-10/12 mx-auto my-20'>
                {
                    blogs.map(b=>
                        <div key={b.id} className='hover:shadow-xl'>
                            <img className='h-80 w-full' src={b.img} alt="" />
                            <div className='pb-5 px-2'>
                                <div className='flex items-center my-2 text-gray-500'>
                                    <BsCalendarDay/>
                                    <p className='ml-2 mr-5'>{b.date}</p>
                                    <FaRegComment/>
                                    <p className='mx-1'>{b.comments}</p>
                                </div>
                                <h3 className='text-xl font-semibold'>{b.title}</h3>
                                <p className='text-sm'>{b.text}</p>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default FeatureBlog;