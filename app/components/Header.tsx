'use client'
import React , {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header({selectedIndex}:any) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(selectedIndex);
  
  
  return (
    <div className='flex justify-between mr-20'>
      <Image src={'/logo.png'} alt="logo" width={124} height={77} 
      className='mt-12 ml-20'/>
      <li className='flex gap-2 mt-16 font-poppins font-semibold text-xl leading-10'>
        <ul>
          <Link href={"/pages/home"}>
          <div  className={`p-4 cursor-pointer py-0.5 px-5 rounded-[14px] ${selectedTabIndex === 1 ? 'bg-[#000000] text-white' : 'bg-transparent'}`}
            onClick={() => setSelectedTabIndex(1)}>
            Home
          </div>
          </Link>
        </ul>
        <ul>
          <Link href={"/pages/about"}>
          <div  className={`p-4 cursor-pointer py-0.5 px-5 rounded-[14px] ${selectedTabIndex === 2 ? 'bg-[#000000] text-white' : 'bg-transparent'}`}
            onClick={() => setSelectedTabIndex(2)}>
            About
          </div>
          </Link>
        </ul>
        <ul>
          <Link href={"/pages/courses"}>
          <div  className={`p-4 cursor-pointer py-0.5 px-5 rounded-[14px] ${selectedTabIndex === 3 ? 'bg-[#000000] text-white' : 'bg-transparent'}`}
            onClick={() => setSelectedTabIndex(3)}>
            Courses
          </div>
          </Link>
        </ul>
        <ul>
          <Link href={"/pages/contact"}>
          <div  className={`p-4 cursor-pointer py-0.5 px-5 rounded-[14px] ${selectedTabIndex === 4 ? 'bg-[#000000] text-white' : 'bg-transparent'}`}
            onClick={() => setSelectedTabIndex(4)}>
            Conatact
          </div>
          </Link>
        </ul>
      </li>
      <div className='ml-24'>
      <button className={` cursor-pointer bg-black mt-16 h-8 w-24 rounded-2xl ml-20 mr-4
       ${selectedTabIndex === 0 ? 'bg-[#000000] text-white' : 'bg-transparent border-[2px] border-black '}`}
      onClick={() => setSelectedTabIndex(0)}>Login</button>
      <button className=' bg-black text-white mt-16 h-8 w-32 rounded-2xl'>Join for free</button>
      </div>
   
    </div>
  )
}


