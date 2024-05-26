import React from 'react'
import Footer from '@/app/components/Footer'
import About_container from '@/app/components/About_container'
import Header from '@/app/components/Header'
export default function About() {
  const selectedIndex=2;
  return (
    <div>
        <div><Header selectedIndex={selectedIndex}n/></div>
        <div className=' h-28 w border-b-2 mb-16'> 
            <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif]
             mt-28 mb-16 ml-32  text-[48px] font-black leading-[78.77px]">
              About Online Education</h1>

        </div>
        <div>
         <About_container/>
        </div>
        <div><Footer/></div>
     
    </div>
  )
}
