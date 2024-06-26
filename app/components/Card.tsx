import React from 'react';
import Image from 'next/image';

export default function Card(props:any) {
  const { image, time, course_name, discription, rating, no_rating, dp, name, price } = props;
  
  return (
    <div className="w-full md:w-[384px]  mx-auto my-6 sm:my-8 md:my-10 lg:my-12 p-4 sm:p-6 md:p-8 lg:p-10 bg-[#454545] rounded-[30px] box-shadow-xl" style={{ boxShadow: '-5px 15px 10px rgba(0, 0, 0, 0.3)' }}>
      <div className="relative">
        <Image src={image} alt="course image" width={336} height={240} className="w-full h-auto rounded-lg" />
        <div className="absolute top-1.5 right-1 md:top-2 md:right-2 bg-white rounded-lg text-[8px] md:text-xs px-1 py-0.5 md:px-4 md:py-1.5 shadow-md flex items-center space-x-1">
          <Image src={'/clock.svg'} alt="time icon" width={15} height={15} />
          <span className='text-[#667085]'>{time}</span>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-[#9FFA00] text-sm sm:text-base font-semibold uppercase">Design</span>
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-tight mt-2">{course_name}</h2>
        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mt-2">{discription}</p>
        <div className="flex items-center mt-3">
          <span className="text-[#9FFA00] text-lg font-semibold">{rating}</span>
          <div className="flex items-center ml-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.572 4.846a1 1 0 00.95.69h5.11c.969 0 1.371 1.24.588 1.81l-4.14 3.01a1 1 0 00-.363 1.118l1.572 4.846c.3.921-.755 1.688-1.54 1.118l-4.14-3.01a1 1 0 00-1.176 0l-4.14 3.01c-.785.57-1.84-.197-1.54-1.118l1.572-4.846a1 1 0 00-.363-1.118l-4.14-3.01c-.783-.57-.38-1.81.588-1.81h5.11a1 1 0 00.95-.69l1.572-4.846z"></path>
              </svg>
            ))}
          </div>
          <span className="text-[#969696] text-sm ml-2">({no_rating})</span>
        </div>
        <div className="flex items-center mt-3">
          <Image src={dp} alt="instructor profile" width={50} height={50} className="rounded-full" />
          <div className="ml-3">
            <h1 className="text-white text-sm font-medium leading-[20px]">{name}</h1>
            <h1 className="text-white text-sm font-normal">2001 Enrolled</h1>
          </div>
          <div className="ml-auto text-[#9FFA00] text-lg sm:text-xl font-semibold">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}


