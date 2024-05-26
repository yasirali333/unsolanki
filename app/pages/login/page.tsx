import React from 'react'
import Header from '@/app/components/Header'
import Login_form from '@/app/components/Login_form'
import Footer from '@/app/components/Footer'
export default function Login() {
  const selectedIndex=0;
  return (
    <div>
        <div><Header selectedIndex={selectedIndex}/></div>
        <div> <Login_form/></div>
        <div><Footer/></div>
     
    </div>
  )
}
