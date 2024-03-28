import React, { useState } from 'react';

const Navbar = () => {

    const [nav, setNav ] = useState(false)

  return (
    <div>
        <div className="flex py-4 px-8 items-center justify-between gap-2">

            {/*  left */}
            <div className="flex w-1/6 lg:w-1/2 gap-5">
                <i onClick={ ()=> setNav(!nav) } className="fa-solid fa-bars text-2xl"></i>
                <div className="hidden lg:flex items-center gap-5">
                    <p className="text-2xl">Isabida<span className='font-bold'>Shop</span></p>
                    <div className="flex item-center bg-gray-100 rounded-full overflow-hidden">
                        <p className="py-1 px-4 text-sm bg-black text-white font-bold rounded-full">Delivery</p>
                        <p className="py-1 px-4 Pick-up font-bold">Pick-up</p>
                    </div>
                </div>
            </div>

            {/* center */}
            <div className="flex items-center w-5/6 lg:w-2/5 gap-2 bg-gray-100 rounded-full p-2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className='w-full outline-none bg-gray-100' type="text" placeholder='Search ... ' />
            </div>

            {/* right */}
            <div className="hidden md:flex md:w-1/6 items-center gap-2 justify-end">
                <i className="fa-solid fa-cart-shopping text-2xl"></i>
                <p className="text-base">Cart</p>
            </div>



    
            {/* show menu  first layer*/}

            {nav ? <div className="bg-black/70 fixed top-0 left-0 w-full h-screen z-10"></div> : ''}


            <div className={nav ? 'w-2/3 md:w-1/2 fixed top-0 left-0 z-20 h-screen bg-white p-4 duration-300' : 'w-2/3 md:w-1/2 fixed top-0 left-[-100%] z-20 h-screen bg-white p-4 duration-300'}>
                <div className="mt-2 flex justify-between items-center">
                    <p className="text-base md:text-2xl ml-5">Isabida<span className='font-bold'>Shop</span></p>
                    <i onClick={()=> setNav(!nav)} className="fa-solid fa-x text-base hover:text-green-400 cursor-pointer"></i>
                </div>
                <div className="mt-10 flex flex-col gap-5 ml-5">
                    <a className='text-base text-gray-700 hover:text-green-400' href=""><i className="fa-solid fa-cart-flatbed-suitcase"></i> Order</a>
                    <a className='text-base text-gray-700 hover:text-green-400' href=""><i className="fa-solid fa-heart"></i> Favorite</a>
                    <a className='text-base text-gray-700 hover:text-green-400' href=""><i className="fa-solid fa-wallet"></i> Wallet</a>
                    <a className='text-base text-gray-700 hover:text-green-400' href=""><i className="fa-solid fa-question"></i> Help</a>
                    <a className='text-base text-gray-700 hover:text-green-400' href=""><i className="fa-solid fa-rectangle-ad"></i> Promotions</a>
                    <a className='text-base text-gray-700 hover:text-green-400' href=""><i className="fa-solid fa-star"></i> BestOne</a>
                    <a className='text-base text-gray-700 hover:text-green-400' href=""><i className="fa-solid fa-users-between-lines"></i> Invite Friends</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar



