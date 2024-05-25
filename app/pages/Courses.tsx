import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Course_container from '../components/course_container'
export default function Courses() {
  return (
    <div>
        <div><Header/></div>
        
        <div>
        <Course_container/>
        </div>
        <div><Footer/></div>
     
    </div>
  )
}
