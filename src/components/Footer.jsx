import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs';
import {
  FaDribbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
export default function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 flex flex-row'>
          GROW
          <BsGraphUpArrow />
        </h1>
        <p className='py-4'>
          we are a one-stop destination for individuals and businesses seeking
          AI-powered solutions for their financial needs, providing valuable
          insights, tools, and services to help them achieve their financial
          goals effectively. make this shorter
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-3 flex justify-between'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insight</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
