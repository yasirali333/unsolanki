import React from 'react'
import Course_box from './Course_box'

export default function course_container() {
   
  return (
    <div>
      <div className='w-[1150px] '> 
            <h1 className="text-[#262626]  font-['Be_Vietnam_Pro',_sans-serif]
             mt-16 ml-20  text-[46px] font-extrabold leading-[72px]">
              Online Courses on Design and Development</h1>

        </div>
        <Course_box
        course_name='Web Design Fundamentals'
        course_disc='Learn the fundamentals of web design, including HTML, CSS, and responsive
        design principles. Develop the skills to create visually appealing and user-friendly 
        websites.'
        course_image1='/course1.1.png'
        course_image2='/course1.2.png'
        course_image3='/course1.3.png'
        week='4 week'
        type='Beginner'
        name='By John Smith'
        one='Introduction to HTML'
        two='Styling with CSS'
        three='Introduction to Responsive Design'
        four='Design Principles for Web'
        five='Building a Basic Website'        
        />
         <Course_box
        course_name='UI/UX Design'
        course_disc='Master the art of creating intuitive user interfaces (UI) and enhancing
         user experiences (UX). Learn design principles, wireframing, prototyping, and usability
        testing techniques.'
        course_image1='/course1.1.png'
        course_image2='/course1.2.png'
        course_image3='/course1.3.png'
        week='6 week'
        type='Intermediate'
        name='By Emily Jhonson'
        one='Introduction to UI/UX Design'
        two='User Research and Personas'
        three='Wireframing and Prototyping'
        four='Visual Design and Branding'
        five='Usability Testing and Iteration'        
        />
         <Course_box
        course_name='Mobile App Development'
        course_disc='Dive into the world of mobile app development. Learn to build native iOS 
        and Android applications using industry-leading frameworks like Swift and Kotlin.'
        course_image1='/course1.1.png'
        course_image2='/course1.2.png'
        course_image3='/course1.3.png'
        week='8 week'
        type='Intermediat'
        name='By John Smith'
        one='Introduction to HTML'
        two='Styling with CSS'
        three='Introduction to Responsive Design'
        four='Design Principles for Web'
        five='Building a Basic Website'        
        />
         <Course_box
        course_name='Web Design Fundamentals'
        course_disc='Learn the fundamentals of web design, including HTML, CSS, and responsive
        design principles. Develop the skills to create visually appealing and user-friendly 
        websites.'
        course_image1='/course1.1.png'
        course_image2='/course1.2.png'
        course_image3='/course1.3.png'
        week='4 week'
        type='Beginner'
        name='By John Smith'
        one='Introduction to HTML'
        two='Styling with CSS'
        three='Introduction to Responsive Design'
        four='Design Principles for Web'
        five='Building a Basic Website'        
        />
         <Course_box
        course_name='Web Design Fundamentals'
        course_disc='Learn the fundamentals of web design, including HTML, CSS, and responsive
        design principles. Develop the skills to create visually appealing and user-friendly 
        websites.'
        course_image1='/course1.1.png'
        course_image2='/course1.2.png'
        course_image3='/course1.3.png'
        week='4 week'
        type='Beginner'
        name='By John Smith'
        one='Introduction to HTML'
        two='Styling with CSS'
        three='Introduction to Responsive Design'
        four='Design Principles for Web'
        five='Building a Basic Website'        
        />
        
    </div>
    
  )
}
