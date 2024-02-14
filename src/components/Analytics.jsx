import React from 'react';
import img1 from '../assests/aifinance.avif';
export default function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={img1} alt='img1' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>
            AI in Modernizing Financial Services
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Explore how artificial intelligence is revolutionizing traditional
            financial services,
          </h1>
          <p>
            {' '}
            Explore how artificial intelligence is revolutionizing traditional
            financial services, from banking to investment management
          </p>
          <button className=' bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
