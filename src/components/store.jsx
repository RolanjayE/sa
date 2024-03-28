import React, { useState } from 'react';
import { data } from '../data/data.js';

const Store = () => { // Capitalize component name
    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        if (category === 'all') {
            setFoods(data); // Reset to the original data array
        } else {
            const filteredFoods = data.filter(item => item.category === category);
            setFoods(filteredFoods); // Set filtered array based on category
        }
    }



    const filterPrice = (price) => {
        const priceFitered = data.filter((items) => items.price === price);
        setFoods(priceFitered)
    }

    return (
        <div className='max-w-[1500px] mx-auto p-4'>
            <h1 className='text-orange-600 text-center font-bold text-2xl pt-10'>Top Rated Menu Items</h1>

            <div className="">
                {/* Filter type */}
                <div>
                    <p className='text-base text-gray-700 pb-3'>Filter Type</p>
                    <div className="flex items-center gap-1 py-2">
                        <button onClick={() => filterType('all')} className=' text-orange-700 p-1 px-5 border border-orange-600 rounded-sm hover:bg-orange-700 hover:text-white'>All</button>
                        <button onClick={() => filterType('burger')} className=' text-orange-700 p-1 px-5 border border-orange-600 rounded-sm hover:bg-orange-700 hover:text-white'>Burger</button>
                        <button onClick={() => filterType('pizza')} className=' text-orange-700 p-1 px-5 border border-orange-600 rounded-sm hover:bg-orange-700 hover:text-white'>Pizza</button>
                        <button onClick={() => filterType('salad')} className=' text-orange-700 p-1 px-5 border border-orange-600 rounded-sm hover:bg-orange-700 hover:text-white'>Salad</button>
                    </div>
                </div>
                
                {/* Filter price */}
                <div>
                    <p className='text-base text-gray-700 pb-3'>Filter Price</p>
                    <div className="flex items-center gap-1">
                        <button onClick={() => filterPrice('$')} className=' text-orange-700 p-1 px-5 border border-orange-600 rounded-sm hover:bg-orange-700 hover:text-white'>$</button>
                        <button onClick={() => filterPrice('$$')} className=' text-orange-700 p-1 px-5 border border-orange-600 rounded-sm hover:bg-orange-700 hover:text-white'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className=' text-orange-700 p-1 px-5 border border-orange-600 rounded-sm hover:bg-orange-700 hover:text-white'>$$$</button>
                    </div>
                </div>
            </div>

            {/* Display foods */}
            <div className='max-w-[1500px] mx-auto grid md:grid-cols-4 lx:grid-cols-5 grid-cols-1 gap-2 rounded-xl shadow-lg py-4'>
                {foods.map((item, index) => (
                    <div className='shadow-xl rounded-xl' key={index}>
                        <img className='max-h-[190px] w-full h-full object-cover rounded-xl' src={item.img} alt="" />
                        <div className='flex flex-wrap justify-between p-4'>
                            <h1 className='text-1xl font-bold text-orange-600'>{item.name}</h1>
                            <p className='text-base bg-orange-500 text-white px-2 rounded'>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
