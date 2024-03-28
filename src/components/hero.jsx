import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-[1500px] mx-auto p-4'>

      <div className="relative max-h-[500px]">
        <div className='absolute w-full h-full max-h-[500px] bg-black/45 text-gray-100 flex flex-col justify-center leading-3'>
          <h1 className='leading-3 font-bold text-4xl p-4 md:text-5xl lg:text-6xl'>The <span className='text-yellow-600'>BEST</span></h1>
          <h1 className='leading-3 font-bold text-4xl p-4 md:text-5xl'><span className='text-yellow-600'>FOODS</span> Delivery</h1>
        </div>
        <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8fDB8fHww" style={{ height: '500px', width: '100%' }} alt="" />
      </div>

    </div>
  );
};

export default Hero;
