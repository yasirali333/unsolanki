import React from 'react'
import Image from 'next/image'
export default function Course_box(props:any) {
    const {course_name,course_disc,course_image1,course_image2,course_image3,
        week,type,name,one,two,three,four,five }=props;
  return (
    <div className='ml-20 mr-20 mb-4'>
       <div className='flex  justify-between mb-8'>
      <div className='w-[950px]  '>
      <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
      text-[24px] font-semibold leading-[36px] mt-6 mb-2">
      {course_name}
      </h1>
      <p className="text-[#59595A] font-['Be_Vietnam_Pro',_sans-serif] 
      text-[18px] font-normal leading-[27.77px]">
    {course_disc}
      </p>
      </div>
      <div>
        <button className='bg-black text-white mt-14 rounded-md px-4 py-3'>View Course</button>
      </div>
    </div>
    <div className='flex space-x-3 '>
      <Image src={course_image1} alt="logo" width={390} height={420} 
      className='radius-[8px]'/>

      <Image src={course_image2} alt="logo" width={390} height={420} 
      className='radius-[8px]'/>

      <Image src={course_image3} alt="logo" width={390} height={420} 
      className='radius-[8px]'/>
    </div>
    <div className='flex space-x-1 justify-between mt-6'>
        <div className='flex space-x-1'>
        <button className='border-[1px] rounded-[8px] py-2 px-3'>{week}</button>
        <button className='border-[1px] rounded-[8px] py-2 px-3'>{type}</button>
        </div>
        <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[20px] font-medium leading-[25.77px] mt-1">
            {name}</h1>
    </div>
    <div className='w-[1200px] h-[279px] mt-8 rounded-[8px] border-[1px] '>
      <div className='h-[81px]  border-b-[1px] '>
       <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[22px] font-semibold leading-[33px] pt-6 pl-6">Curiculum</h1>
      </div>
      <div className='flex space-x-0'>
        <div className='w-[239px] h-32 border-r-[1px] pl-10 mt-8 mb-8 '>
            <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[50px] font-extrabold leading-[25.77px] mt-1">01</h1>
           <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[18px] font-medium leading-[27px] mt-6 mr-8">{one}</h1>
        </div>
        <div className='w-[239px] h-32 border-r-[1px] pl-10 mt-8 mb-8 '>
            <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[50px] font-extrabold leading-[25.77px] mt-1">02</h1>
           <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[18px] font-medium leading-[27px] mt-6 mr-8">{two}</h1>
        </div>
        <div className='w-[239px] h-32 border-r-[1px] pl-10 mt-8 mb-8 '>
            <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[50px] font-extrabold leading-[25.77px] mt-1">03</h1>
           <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[18px] font-medium leading-[27px] mt-6 mr-8">{three}</h1>
        </div>
        <div className='w-[239px] h-32 border-r-[1px] pl-10 mt-8 mb-8 '>
            <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[50px] font-extrabold leading-[25.77px] mt-1">04</h1>
           <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[18px] font-medium leading-[27px] mt-6 mr-8">{four}</h1>
        </div>
        <div className='w-[239px] h-32 pl-10 mt-8 mb-8 '>
            <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[50px] font-extrabold leading-[25.77px] mt-1">05</h1>
           <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] 
           text-[18px] font-medium leading-[27px] mt-6 mr-8">{five}</h1>
        </div>
      </div>
    </div>
    </div>
  )
}
