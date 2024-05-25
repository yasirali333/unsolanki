import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact_form from '../components/Contact_form'
export default function Login() {
  return (
    <div>
        <div>    <Header/></div>
        <h1 className=" ml-40 mt-10 text-3xl font-black font-['Be_Vietnam_Pro',_sans-serif]">Contact US</h1>
        <div> <Contact_form/></div>
        <div><Footer/></div>
     
    </div>
  )
}
