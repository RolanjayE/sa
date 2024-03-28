import React from 'react'

const card = () => {
  return (
    <div className='max-w-[1500px] mx-auto px-4 py-8'>
      {/* card */}
      <div className="grid md:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-4">

        <div className="relative rounded-xl md:h-[220px] h-[200px]">
            <div className="absolute top-0 left-0 w-full h-full text-white bg-black/50">
                <p className='py-4 px-2 text-2xl font-bold'>Sun's Out, BOGO's Out</p>
                <p className='text-base text-yellow-200 px-2'>Through 4/26</p>
                <button className='absolute bottom-2 border-white rounded-xl bg-white py-2 px-4 text-black mx-2'>Order now</button>            
            </div>
            <img className='max-h-[200px] md:max-h-[220px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww" alt="" />
        </div>

        <div className="relative rounded-xl md:h-[220px] h-[200px]">
            <div className="absolute top-0 left-0 w-full h-full text-white bg-black/50">
                <p className='py-4 px-2 text-2xl font-bold'>Sun's Out, BOGO's Out</p>
                <p className='text-base text-yellow-200 px-2'>Through 4/26</p>
                <button className='absolute bottom-2 border-white rounded-xl bg-white py-2 px-4 text-black mx-2'>Order now</button>            
            </div>
            <img className='max-h-[200px] md:max-h-[220px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        
        <div className="relative rounded-xl md:h-[220px] h-[200px]">
            <div className="absolute top-0 left-0 w-full h-full text-white bg-black/50">
                <p className='py-4 px-2 text-2xl font-bold'>Sun's Out, BOGO's Out</p>
                <p className='text-base text-yellow-200 px-2'>Through 4/26</p>
                <button className='absolute bottom-2 border-white rounded-xl bg-white py-2 px-4 text-black mx-2'>Order now</button>            
            </div>
            <img className='max-h-[200px] md:max-h-[220px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>


      </div>
    </div>
  )
}

export default card
