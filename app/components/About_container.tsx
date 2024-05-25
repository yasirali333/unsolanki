import React from 'react'
import About_div from './About_div'
import Image from 'next/image'
export default function About_container() {
  return (
    <div>
      <div className='ml-32'>
      <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] mt-4 
      text-[48px] font-medium leading-[72.77px]">Achievements</h1>
      <p className="text-[#59595A] font-['Be_Vietnam_Pro',_sans-serif] mt-3
      text-[18px] font-normal leading-[27.77px]">
        Our commitment to excellence has led us to achieve significant milestones along our journey.
         Here are some of our notable achievements
      </p>
    </div>
    <div className='flex space-x-4 ml-20'>
      <div>
      <About_div icon='/icon1.svg' heading='Trusted by Thousands' 
      discription='We have successfully served thousands of students, 
      helping them unlock their potential and achieve their career goals'/>
      <About_div icon='/icon1.svg' heading='Trusted by Thousands' 
      discription='We have successfully served thousands of students, 
      helping them unlock their potential and achieve their career goals'/>
      </div>
      <div>
      <About_div icon='/icon1.svg' heading='Trusted by Thousands' 
      discription='We have successfully served thousands of students, 
      helping them unlock their potential and achieve their career goals'/>
      <About_div icon='/icon1.svg' heading='Trusted by Thousands' 
      discription='We have successfully served thousands of students, 
      helping them unlock their potential and achieve their career goals'/>
      </div>
    </div>
    <div  className='ml-32'>
      <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] mt-4 
      text-[48px] font-medium leading-[72.77px]">Our Goals</h1>
      <p className="text-[#59595A] font-['Be_Vietnam_Pro',_sans-serif] mt-3
      text-[18px] font-normal leading-[27.77px]">
        At SkillBridge, our goal is to empower individuals from all backgrounds
        to thrive in the world of design and development. We believe that education
        should be accessible and transformative, enabling learners to pursue their passions 
        and make a meaningful impact.Through our carefully crafted courses, we aim to
      </p>
    </div>
    <div className='flex space-x-4 ml-20'>
      <div>
      <About_div icon='/icon1.svg' heading='Trusted by Thousands' 
      discription='We have successfully served thousands of students, 
      helping them unlock their potential and achieve their career goals'/>
      <About_div icon='/icon1.svg' heading='Trusted by Thousands' 
      discription='We have successfully served thousands of students, 
      helping them unlock their potential and achieve their career goals'/>
      </div>
      <div>
      <About_div icon='/icon1.svg' heading='Trusted by Thousands' 
      discription='We have successfully served thousands of students, 
      helping them unlock their potential and achieve their career goals'/>
      <About_div icon='/icon1.svg' heading='Trusted by Thousands' 
      discription='We have successfully served thousands of students, 
      helping them unlock their potential and achieve their career goals'/>
      </div>
    </div>
    
    <div className='flex  justify-between mr-40  relative mb-32'>
    <div className='absolute inset-0 '>
    <Image src={'/bg_about.png'} alt="logo" width={420} height={420} 
    className='ml-[620px]' />
    </div>
      <div className='w-[648px] ml-32 mt-16 relative'>
      <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] mt-4 
      text-[48px] font-semibold leading-[57.77px]">
      Together, let's shape the future
       of digital innovation
      </h1>
      <p className="text-[#59595A] font-['Be_Vietnam_Pro',_sans-serif] mt-3
      text-[18px] font-normal leading-[27.77px]">
        Join us on this exciting learning journey and unlock your potential in
         design and development.
      </p>
      </div>
      <div>
        <button className='bg-[#001642] text-white mt-36 rounded-md px-4 py-3'>Join Now</button>
      </div>
    </div>
    </div>
  )
}