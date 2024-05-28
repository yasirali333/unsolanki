import React from 'react';
import Image from 'next/image';

export default function Home_info() {
  return (
    <div className='flex flex-col justify-between md:flex-row  pr-4 lg:pr-10 w-full h-auto bg-white lg:pl-20 relative'>
      <div className='w-2/3 lg:w-[750px] ml-[18%] md:ml-0 '> 
        <div className='absolute inset-0 lg:ml-8'>
          <Image src='/bg_circle.svg' alt="bg_circle" width={730} height={730} className='hidden lg:block' />
        </div>
        <div className='relative w-full lg:w-[650px] h-auto pt-8 lg:pt-32 px-4 lg:px-0'>
          <h1 className="text-black font-bold font-['Poppins',_sans-serif] text-[32px] lg:text-[73px] leading-tight lg:leading-[93.16px]">
            Quality education is a key to your future success
          </h1>
          <h1 className="text-black font-normal font-['Poppins',_sans-serif] text-[14px] lg:text-[14px] leading-tight lg:leading-[17.87px] mt-4 lg:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </h1>
          <button type="submit" className="w-2/3 md:w-1/2 lg:w-66 mt-4 lg:mt-8 mb-8 lg:mb-36 bg-black text-white py-2 px-4 rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            <h1 className='text-white text-lg font-bold'>Get a Free Consultation</h1>
          </button>
          <div className='space-y-3  lg:mt-0 mt-4 hidden md:block'>
            <h1 className="text-black text-[16px] font-['Inter',_sans-serif] font-semibold leading-[24px] tracking-tight">
              Explore Program
            </h1>
            <h1 className="text-black text-[24px] lg:text-[36px] font-['Inter',_sans-serif] font-semibold leading-[30px] lg:leading-[44px]">
              Our Most Popular Class
            </h1>
            <p className="text-black text-[16px] lg:text-[20px] font-['Inter',_sans-serif] font-normal leading-tight lg:leading-[30px]">
              Let's join our famous class, the knowledge provided will definitely be useful for you.
            </p>
          </div>
        </div>
      </div>
         <div className=''>
         <div className=' w-full  justify-center flex space-x-0 lg:justify-start lg:space-x-5 mt-8 lg:mt-0  '>

        <div className='flex flex-col items-center lg:mt-24 lg:ml-4'>
          <Image src='/student.svg' alt="student" width={213} height={213} className='mb-4  lg:mb-0' />
          <Image src='/internship.svg' alt="internship" width={213} height={213} />
        </div>
        <div className='flex flex-col items-center lg:mt-8 '>
          <Image src='/project.svg' alt="project" width={213} height={213} className='mb-4 lg:mb-0' />
          <Image src='/courses.svg' alt="courses" width={213} height={213} />
        </div>
       
      </div>
      <div className='space-y-3 w-1/2 md:w-full lg:mt-0 mt-4 block md:hidden ml-[24%] md:ml-0 '>
            <h1 className="text-black text-[16px] font-['Inter',_sans-serif] font-semibold leading-[24px] tracking-tight">
              Explore Program
            </h1>
            <h1 className="text-black text-[24px] lg:text-[36px] font-['Inter',_sans-serif] font-semibold leading-[30px] lg:leading-[44px]">
              Our Most Popular Class
            </h1>
            <p className="text-black text-[16px] lg:text-[20px] font-['Inter',_sans-serif] font-normal leading-tight lg:leading-[30px]">
              Let's join our famous class, the knowledge provided will definitely be useful for you.
            </p>
      </div>
      </div>
      
    </div>
  );
}

