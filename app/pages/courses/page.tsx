import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Course_container from '@/app/components/course_container'
export default function Courses() {
  const selectedIndex=3;
  return (
    <div>
        <div><Header selectedIndex={selectedIndex}/></div>
        
        <div>
        <Course_container/>
        </div>
        <div><Footer/></div>
     
    </div>
  )
}
