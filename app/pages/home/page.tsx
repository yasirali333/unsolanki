import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Home_info from '@/app/components/Home_info'
import Card from '@/app/components/Card'
export default function Login() {
  const selectedIndex=1;
  return (
    <div>
       <div><Header selectedIndex={selectedIndex}/></div>
       <div><Home_info/></div>
       <div className='mt-20 ml-20 pb-8 flex space-x-10 max-w-[1240px] overflow-x-scroll hide-scrollbar'>
   
      <div className='w-[384]'>
       <Card image='/course_3.svg' time='01 hr 02 mins' course_name='Figma UI UX Design...' discription='Use Figma to get a job in UI Design, User Interface, User Experience design.'
       rating='4.3' no_rating='16,325' name='Jane Cooper' dp='/dp3.svg' price='$17.84'/>
      </div>
      <div className='w-[384]'>
       <Card image='/course_1.svg' time='08 hr 12 mins' course_name='Figma UI UX Design...' discription='Use Figma to get a job in UI Design, User Interface, User Experience design.'
       rating='4.3' no_rating='16,325' name='Jane Cooper' dp='/dp1.svg' price='$17.84'/>
      </div>
      <div className='w-[384]'>
       <Card image='/course_2.svg' time='06 hr 03 mins' course_name='Learn With Shoaib' discription='Design Web Sites and Mobile Apps that Your Users Love and Return to Again.'
       rating='3.9' no_rating='832' name='Jenny Wilson' dp='/dp2.svg' price='$8.99'/>
      </div>
       <div className='w-[384]'>
       <Card image='/course_3.svg' time='01 hr 02 mins' course_name='Figma UI UX Design...' discription='Use Figma to get a job in UI Design, User Interface, User Experience design.'
       rating='4.3' no_rating='16,325' name='Jane Cooper' dp='/dp3.svg' price='$17.84'/> 
       </div>

       <div className='w-[384]'>
       <Card image='/course_2.svg' time='06 hr 03 mins' course_name='Learn With Shoaib' discription='Design Web Sites and Mobile Apps that Your Users Love and Return to Again.'
       rating='3.9' no_rating='832' name='Jenny Wilson' dp='/dp2.svg' price='$8.99'/>
      </div>
       <div className='w-[384]'>
       <Card image='/course_3.svg' time='01 hr 02 mins' course_name='Figma UI UX Design...' discription='Use Figma to get a job in UI Design, User Interface, User Experience design.'
       rating='4.3' no_rating='16,325' name='Jane Cooper' dp='/dp3.svg' price='$17.84'/> 
       </div>
       </div>
       <button className='bg-black w-48 h-8 mb-4 ml-[550px]  rounded-md text-white '>Explore All Programs</button>
       <div><Footer/></div>
     
    </div>
   
  )
}