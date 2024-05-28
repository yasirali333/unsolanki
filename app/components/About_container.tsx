import React from 'react';
import About_div from './About_div';
import Image from 'next/image';

export default function About_container() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="mb-8">
        <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] mt-4 text-[32px] sm:text-[36px] md:text-[48px] font-medium leading-tight sm:leading-snug md:leading-[72.77px]">
          Achievements
        </h1>
        <p className="text-[#59595A] font-['Be_Vietnam_Pro',_sans-serif] mt-3 text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[27.77px]">
          Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
        <div className="flex flex-col space-y-4">
          <About_div icon='/icon1.svg' heading='Trusted by Thousands' discription='We have successfully served thousands of students, helping them unlock their potential and achieve their career goals' />
          <About_div icon='/icon2.png' heading='Trusted by Thousands' discription='We have successfully served thousands of students, helping them unlock their potential and achieve their career goals' />
        </div>
        <div className="flex flex-col space-y-4">
          <About_div icon='/icon3.png' heading='Trusted by Thousands' discription='We have successfully served thousands of students, helping them unlock their potential and achieve their career goals' />
          <About_div icon='/icon4.png' heading='Trusted by Thousands' discription='We have successfully served thousands of students, helping them unlock their potential and achieve their career goals' />
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] mt-4 text-[32px] sm:text-[36px] md:text-[48px] font-medium leading-tight sm:leading-snug md:leading-[72.77px]">
          Our Goals
        </h1>
        <p className="text-[#59595A] font-['Be_Vietnam_Pro',_sans-serif] mt-3 text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[27.77px]">
          At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to...
        </p>
      </div>

      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
        <div className="flex flex-col space-y-4">
          <About_div icon='/icon5.png' heading='Trusted by Thousands' discription='We have successfully served thousands of students, helping them unlock their potential and achieve their career goals' />
          <About_div icon='/icon6.png' heading='Trusted by Thousands' discription='We have successfully served thousands of students, helping them unlock their potential and achieve their career goals' />
        </div>
        <div className="flex flex-col space-y-4">
          <About_div icon='/icon7.png' heading='Trusted by Thousands' discription='We have successfully served thousands of students, helping them unlock their potential and achieve their career goals' />
          <About_div icon='/icon8.png' heading='Trusted by Thousands' discription='We have successfully served thousands of students, helping them unlock their potential and achieve their career goals' />
        </div>
      </div>

      <div className="relative mb-32">
        <div className="absolute inset-0 flex justify-center items-center">
          <Image src='/bg_about.png' alt="background" width={420} height={420} className="hidden lg:block" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:justify-between lg:mx-32">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-16">
            <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] mt-4 text-[32px] sm:text-[36px] md:text-[48px] font-semibold leading-tight sm:leading-snug md:leading-[57.77px]">
              Together, let's shape the future of digital innovation
            </h1>
            <p className="text-[#59595A] font-['Be_Vietnam_Pro',_sans-serif] mt-3 text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[27.77px]">
              Join us on this exciting learning journey and unlock your potential in design and development.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <button className='bg-[#001642] text-white rounded-md px-4 py-3'>
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


