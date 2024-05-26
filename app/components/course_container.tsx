import React from 'react'
import Course_box from './Course_box'

export default function course_container() {
   
  return (
    <div className='mb-12'>
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
        course_image1='/course2.1.png'
        course_image2='/course2.2.png'
        course_image3='/course2.3.png'
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
        course_image1='/course3.1.png'
        course_image2='/course3.2.png'
        course_image3='/course3.3.png'
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
        course_name='Graphic Design for Beginners'
        course_disc='Discover the fundamentals of graphic design, including typography, color 
        theory, layout design, and image manipulation techniques. Create visually stunning 
        designs for print and digital media.'
        course_image1='/course4.1.png'
        course_image2='/course4.2.png'
        course_image3='/course4.3.png'
        week='10 week'
        type='Beginner'
        name='By Sarah Thompson'
        one='Introduction to Graphic Design'
        two='Typography and Color Theory'
        three='Layout Design and Composition'
        four='Image Editing and Manipulation'
        five='Designing for Print and Digital Media'        
        />
         <Course_box
        course_name='Front-End Web Development'
        course_disc='Become proficient in front-end web development. Learn HTML, CSS, JavaScript,
        and popular frameworks like Bootstrap and React. Build interactive and responsive websites.'
        course_image1='/course5.1.png'
        course_image2='/course5.2.png'
        course_image3='/course5.3.png'
        week='10 week'
        type='Intermediate'
        name='By Michael Adams'
        one='HTML Fundamentals'
        two='CSS Styling and Layouts'
        three='JavaScript Basics'
        four='Building Responsive Websites'
        five='Introduction to Bootstrap and React'        
        />
        
    </div>
    
  )
}
