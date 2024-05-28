import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-[#001642] w-full py-12 px-4 sm:px-8 md:px-16 lg:px-24'>
      <div className='flex flex-col md:flex-row gap-12'>
        <div className='w-1/2md:w-1/4 font-Inter'>
          <Image src={'/b_logo.png'} alt="logo" width={124} height={77} />
          <p className="text-white text-[16px] font-['Inter',_sans-serif] font-normal leading-[23.77px] mt-4">
            Top learning experiences that create more talent in the world.
          </p>
        </div>
        <div className='w-full md:w-1/6 text-white'>
          <h6 className='text-[#98A2B3] mb-3'>Product</h6>
          <ul className='space-y-2'>
            <li>Overview</li>
            <li>Feature</li>
            <li>Solution</li>
            <li>Tutorial</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='w-full md:w-1/6 text-white'>
          <h6 className='text-[#98A2B3] mb-3'>Company</h6>
          <ul className='space-y-2'>
            <li>About us</li>
            <li>Careers</li>
            <li className="flex items-center space-x-2">
              <span>Press</span>
              <span className="bg-gray-200 text-[#001642] text-sm px-2 py-1 rounded-full">New</span>
            </li>
            <li>News</li>
          </ul>
        </div>
        <div className='w-full md:w-1/6 text-white'>
          <h6 className='text-[#98A2B3] mb-3'>Social</h6>
          <ul className='space-y-2'>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div className='w-full md:w-1/6 text-white'>
          <h6 className='text-[#98A2B3] mb-3'>Legal</h6>
          <ul className='space-y-2'>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between mt-12'>
        <h4 className='text-[#98A2B3] mb-4 md:mb-0'>© 2022 Ed-Circle. All rights reserved.</h4>
        <ul className='flex space-x-6'>
          <li><Image src={'/twitter.png'} alt="twt" width={25} height={25} /></li>
          <li><Image src={'/linkedin.png'} alt="li" width={25} height={25} /></li>
          <li><Image src={'/facebook.png'} alt="fb" width={25} height={25} /></li>
          <li><Image src={'/github.png'} alt="gh" width={25} height={25} /></li>
          <li><Image src={'/social.png'} alt="social" width={25} height={25} /></li>
        </ul>
      </div>
    </div>
  )
}

