import React from 'react';
import Image from 'next/image';

export default function About_div(props:any) {
  const { icon, heading, discription } = props;

  return (
    <div className='max-w-[603px] h-auto bg-white p-6 sm:p-8 md:p-10 lg:p-12'>
      <Image src={icon} alt="icon" width={50} height={50} />
      <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] mt-4 
        text-[20px] sm:text-[24px] md:text-[28px] font-medium leading-[30px] sm:leading-[36.77px] md:leading-[42px]">
        {heading}
      </h1>
      <p className="text-[#59595A] font-['Be_Vietnam_Pro',_sans-serif] mt-3
        text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[24px] sm:leading-[27.77px] md:leading-[30px]">
        {discription}
      </p>
    </div>
  );
}




// import React from 'react'
// import Image from 'next/image'
// export default function About_div(props:any) {
//     const {icon , heading , discription} = props;
//   return (
//     <div className='max-w-[603px] h-[327px] bg-white pl-20 pt-10 pr-20'>
//        <Image src={icon} alt="icon" width={50} height={50}  />
//       <h1 className="text-[#262626] font-['Be_Vietnam_Pro',_sans-serif] mt-4 
//       text-[24px] font-medium leading-[36.77px]">
//        {heading}</h1>
//       <p className="text-[#59595A] font-['Be_Vietnam_Pro',_sans-serif] mt-3
//       text-[18px] font-normal leading-[27.77px]">
//       {discription}</p>
//       </div>
//   )
// }
