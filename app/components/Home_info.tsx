import React from 'react'
import Image from 'next/image'
export default function Home_info() {
  return (
    <div className='flex justify-between pr-10 w-full h-auto bg-white pl-14 relative'>
     <div className=' w-[750px]'> 
      <div className='absolute inset-0'>
      <Image src='/bg_circle.svg' alt="bg_circle" width={730} height={730}
      className='ml-4'/>
      </div>
      <div className='relative w-[650px] h-auto pt-32 '>
        <h1 className="text-black font-bold font-['Poppins',_sans-serif] text-[73px]  leading-[93.16px] ">
            Quality education is a ley to your future success</h1>
        <h1 className="text-black font-normal font-['Poppins',_sans-serif] text-[14px]  leading-[17.87px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </h1>
        <button type="submit" className="w-66 mt-8 mb-36 bg-black text-white py-2 px-4 
        rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        <h1 className='text-white text-lg font-bold '>Get a Free Consultation</h1>
        </button>
        </div>
        <div className='space-y-3'>
            <h1  className="text-black text-[16px] font-['Inter',_sans-serif] font-semibold leading-[24px] tracking-tight ">
                Explore Program</h1>
            <h1  className="text-black text-[36px] font-['Inter',_sans-serif] font-semibold leading-[44px] ">
                Our Most Popular Class</h1>
            <p  className="text-black text-[20px] font-['Inter',_sans-serif] font-normal leading-[30px]  ">
                Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
        </div>  
      </div>
      <div className='flex space-x-5 '>
      <div className='mt-24'>
      <Image src='/student.svg' alt="bg_circle" width={213} height={213}/>
      <Image src='/internship.svg' alt="bg_circle" width={213} height={213}/>
      </div>
      <div className='mt-36'>
      <Image src='/project.svg' alt="bg_circle" width={213} height={213}/>
      <Image src='/courses.svg' alt="bg_circle" width={213} height={213}/>
      </div>
      </div>
      
    </div>

  )
}
