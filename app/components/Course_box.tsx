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
      className='radius-[8px] w-full h-auto max-w-full '/>

      <Image src={course_image2} alt="logo" width={390} height={420} 
      className='radius-[8px] w-full h-auto max-w-full'/>

      <Image src={course_image3} alt="logo" width={390} height={420} 
      className='radius-[8px] w-full h-auto max-w-full'/>
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
    <div className='w-full lg:w-auto mt-8 rounded-[8px] border-[1px]'>
                <div className='h-[81px] border-b-[1px] flex items-center'>
                    <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif]
                        text-[22px] font-semibold leading-[33px] pl-6">
                        Curriculum
                    </h1>
                </div>
                <div className='flex flex-col lg:flex-row lg:flex-wrap'>
                    {[one, two, three, four, five].map((item, index) => (
                        <div key={index} className={`w-full lg:w-[calc(50%-1rem)] xl:w-[calc(20.333%-1rem)] h-32 border-b lg:border-b-0 ${index < 4 ? 'lg:border-r' : ''} px-6 lg:px-10 mt-8 mb-8`}>
                            <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif]
                                text-[50px] font-extrabold leading-[25.77px]">
                                0{index + 1}
                            </h1>
                            <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif]
                                text-[18px] font-medium leading-[27px] mt-6 mr-8">
                                {item}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}