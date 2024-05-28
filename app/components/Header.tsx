'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header({ selectedIndex }: any) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(selectedIndex);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-4 md:py-4 bg-white pl-16 pr-16">
      <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
        <Image src={'/logo.png'} alt="logo" width={124} height={77} className="ml-1 sm:ml-4 md:ml-0" />
      </div>
      <ul className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-0 font-poppins 
      font-semibold text-md md:text-lg leading-10 ">
        <li>
          <Link href={"/pages/home"}>
            <div className={`p-2 md:p-4 cursor-pointer rounded-lg ${selectedTabIndex === 1 ? 'bg-black text-white' : 'bg-transparent'}`}
              onClick={() => setSelectedTabIndex(1)}>
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/pages/about"}>
            <div className={`p-2 md:p-4 cursor-pointer rounded-lg ${selectedTabIndex === 2 ? 'bg-black text-white' : 'bg-transparent'}`}
              onClick={() => setSelectedTabIndex(2)}>
              About
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/pages/courses"}>
            <div className={`p-2 md:p-4 cursor-pointer rounded-lg ${selectedTabIndex === 3 ? 'bg-black text-white' : 'bg-transparent'}`}
              onClick={() => setSelectedTabIndex(3)}>
              Courses
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/pages/contact"}>
            <div className={`p-2 md:p-4 cursor-pointer rounded-lg ${selectedTabIndex === 4 ? 'bg-black text-white' : 'bg-transparent'}`}
              onClick={() => setSelectedTabIndex(4)}>
              Contact
            </div>
          </Link>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center mt-4 md:mt-0">
        <button className={`cursor-pointer bg-black text-black py-2 px-6 rounded-lg
         ${selectedTabIndex === 0 ? 'bg-black text-white' : 'bg-transparent border-2 border-black'}`}
          onClick={() => setSelectedTabIndex(0)}>Login</button>
        <button className="bg-black text-white py-2 px-10 rounded-lg ">
          Join for free</button>
      </div>
    </div>
  )
}



// 'use client'
// import React , {useState} from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Header({selectedIndex}:any) {
//   const [selectedTabIndex, setSelectedTabIndex] = useState(selectedIndex);
  
  
//   return (
//     <div className='flex justify-between mr-20'>
//       <Image src={'/logo.png'} alt="logo" width={124} height={77} 
//       className='mt-12 ml-20'/>
//       <li className='flex gap-2 mt-16 font-poppins font-semibold text-xl leading-10'>
//         <ul>
//           <Link href={"/pages/home"}>
//           <div  className={`p-4 cursor-pointer py-0.5 px-5 rounded-[14px] ${selectedTabIndex === 1 ? 'bg-[#000000] text-white' : 'bg-transparent'}`}
//             onClick={() => setSelectedTabIndex(1)}>
//             Home
//           </div>
//           </Link>
//         </ul>
//         <ul>
//           <Link href={"/pages/about"}>
//           <div  className={`p-4 cursor-pointer py-0.5 px-5 rounded-[14px] ${selectedTabIndex === 2 ? 'bg-[#000000] text-white' : 'bg-transparent'}`}
//             onClick={() => setSelectedTabIndex(2)}>
//             About
//           </div>
//           </Link>
//         </ul>
//         <ul>
//           <Link href={"/pages/courses"}>
//           <div  className={`p-4 cursor-pointer py-0.5 px-5 rounded-[14px] ${selectedTabIndex === 3 ? 'bg-[#000000] text-white' : 'bg-transparent'}`}
//             onClick={() => setSelectedTabIndex(3)}>
//             Courses
//           </div>
//           </Link>
//         </ul>
//         <ul>
//           <Link href={"/pages/contact"}>
//           <div  className={`p-4 cursor-pointer py-0.5 px-5 rounded-[14px] ${selectedTabIndex === 4 ? 'bg-[#000000] text-white' : 'bg-transparent'}`}
//             onClick={() => setSelectedTabIndex(4)}>
//             Conatact
//           </div>
//           </Link>
//         </ul>
//       </li>
//       <div className='ml-24'>
//       <button className={` cursor-pointer bg-black mt-16 h-8 w-24 rounded-2xl ml-20 mr-4
//        ${selectedTabIndex === 0 ? 'bg-[#000000] text-white' : 'bg-transparent border-[2px] border-black '}`}
//       onClick={() => setSelectedTabIndex(0)}>Login</button>
//       <button className=' bg-black text-white mt-16 h-8 w-32 rounded-2xl'>Join for free</button>
//       </div>
   
//     </div>
//   )
// }


