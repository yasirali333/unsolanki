import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Contact_form from '@/app/components/Contact_form'
export default function Login() {
  const selectedIndex=4;
  return (
    <div>
        <div><Header selectedIndex={selectedIndex}/></div>
        <h1 className=" ml-40 mt-10 text-3xl font-black font-['Be_Vietnam_Pro',_sans-serif]">Contact US</h1>
        <div> <Contact_form/></div>
        <div><Footer/></div>
     
    </div>
  )
}
