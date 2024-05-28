import React from 'react'
import Footer from '@/app/components/Footer'
import About_container from '@/app/components/About_container'
import Header from '@/app/components/Header'

export default function About() {
  const selectedIndex = 2;

  return (
    <div className="min-h-screen flex flex-col">
      <Header selectedIndex={selectedIndex} />
      <div className="border-b-2 mb-16">
        <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif]
          mt-16 sm:mt-28 mb-8 sm:mb-16 mx-4 sm:ml-32 text-[32px] sm:text-[48px] font-black leading-tight sm:leading-[78.77px]">
          About Online Education
        </h1>
      </div>
      <About_container />
      <Footer />
    </div>
  )
}
