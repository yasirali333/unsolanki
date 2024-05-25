import React from 'react'
import Image from 'next/image'
export default function Login_form() {
  return (
    <div className="flex justify-center items-center mt-10 bg-white mb-40">
    <div className="flex space-x-32 max-w-5xl w-full bg-gray-200 pt-16 pl-16 pb-8 pr-16 shadow-lg rounded-lg">
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
  
    <button type="submit" className="w-50 mt-16 ml-36 bg-black text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Send Your Message
    </button>
   
    </div>
  </form>
</div>
    <div className='space-y-5'>
    <div className='w-72 h-32 bg-white rounded-lg space-y-8 pt-5 text-center'>
    <Image src={'/msg.PNG'} alt="twt" width={40} height={40}
     className='ml-32'/>
    <h4>support@unsolanki.com</h4>
    </div>


    <div className='w-72 h-32 bg-white rounded-lg space-y-8 pt-5 text-center'>
    <Image src={'/contact.PNG'} alt="twt" width={40} height={40}
     className='ml-32'/>
    <h4>support@unsolanki.com</h4>
    </div>

    <div className='w-72 h-32 bg-white rounded-lg space-y-8 pt-5 text-center'>
    <Image src={'/location.PNG'} alt="twt" width={40} height={40}
     className='ml-32'/>
    <h4>support@unsolanki.com</h4>
    </div>

    <div className='w-72 h-32 bg-white rounded-lg space-y-8 pt-5 text-center'>
    <div className='flex space-x-2 ml-20'>
    <Image src={'/social_1.PNG'} alt="twt" width={40} height={40}
     className=''/>
     <Image src={'/social_2.PNG'} alt="twt" width={40} height={40}
     className=''/>
     <Image src={'/social_3.PNG'} alt="twt" width={40} height={40}
     className=''/>
     </div>
    <h4>support@unsolanki.com</h4>
    </div>
</div>

</div>
</div>


  )
}
