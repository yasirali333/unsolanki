import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex gap-36'>
      <Image src={'/logo.PNG'} alt="logo" width={124} height={77} 
      className='mt-12 ml-20'/>
      <li className='flex gap-16 mt-16 font-poppins font-semibold text-xl leading-10'>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Courses</ul>
        <ul>Contacts</ul>
      </li>
      <div>
      <button className='bg-black text-white mt-16 h-8 w-24 rounded-2xl ml-20 mr-4'>Login</button>
      <button className='bg-black text-white mt-16 h-8 w-32 rounded-2xl'>Join for free</button>
      </div>
   
    </div>
  )
}
