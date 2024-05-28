import React from 'react'
import Image from 'next/image'
export default function Login_form() {
  return (
    <div className="flex justify-center items-center mt-10 bg-white mb-40">
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-32 max-w-5xl w-full bg-gray-200 pt-16 pl-16 pb-8 pr-16 shadow-lg rounded-lg">
    <div>
   <form>
    <div className="flex space-x-5 mb-4">
    <div>
      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
      <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-3 py-3 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
      </div>
      <div>
      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
      <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-3 py-3 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
      </div>
    </div>
   
    <div className="flex space-x-5 mb-4">
    <div>
      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
      <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-3 py-3 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
      </div>
      <div>
      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
      <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-3 py-3 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
      <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-3 py-3 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
      </div>
     <div>
      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2 mt-5">Email</label>
      <textarea  id="email" name="email" className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none" 
      placeholder="Enter your email" />
     </div>

    <div >
  
    <button type="submit" className="w-50 mt-16 ml-20 md:ml-[20%] bg-black text-white px-6
    py-3 md:px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Send Your Message
    </button>
   
    </div>
  </form>
</div>
<div className='space-y-5 mt-16 md:mt-0 pl-[15%] md:pl-0 '>
    <div className='w-[85%] md:w-72 h-32 bg-white  rounded-lg space-y-8 pt-5 text-center'>
    <Image src={'/msg.png'} alt="twt" width={40} height={40}
     className='ml-[46%] md:ml-33'/>
    <h4>support@unsolanki.com</h4>
    </div>


    <div className='w-[85%] md:w-72 h-32 bg-white rounded-lg space-y-8 pt-5 text-center'>
    <Image src={'/contact.png'} alt="twt" width={40} height={40}
     className='ml-[46%] md:ml-33'/>
    <h4>support@unsolanki.com</h4>
    </div>

    <div className='w-[85%] md:w-72 h-32 bg-white rounded-lg space-y-8 pt-5 text-center'>
    <Image src={'/location.png'} alt="twt" width={40} height={40}
     className='ml-[46%] md:ml-33'/>
    <h4>support@unsolanki.com</h4>
    </div>

    <div className='w-[85%] md:w-72 h-32 bg-white rounded-lg space-y-8 pt-5 text-center'>
    <div className='flex space-x-2 ml-[25%] md:ml-20'>
    <Image src={'/social_1.png'} alt="twt" width={40} height={40}
     className=''/>
     <Image src={'/social_2.png'} alt="twt" width={40} height={40}
     className=''/>
     <Image src={'/social_3.png'} alt="twt" width={40} height={40}
     className=''/>
     </div>
    <h4>support@unsolanki.com</h4>
    </div>
</div>

</div>
</div>


  )
}
