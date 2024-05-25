import React from 'react'

export default function Login_form() {
  return (
    <div className="flex justify-center items-center mt-10 bg-white mb-40">
    <div className="max-w-5xl w-full bg-gray-200 p-10 shadow-lg rounded-lg">
    <h2 className="text-2xl font-semibold font-['Be_Vietnam_Pro',_sans-serif] text-gray-800 mb-4 cs text-center">Login</h2>
   <h4 className="text-[#4C4C4D] text-[18px] font-['Be_Vietnam_Pro',_sans-serif] font-normal leading-[18.77px] text-center">
    Welcome back! Please log in to access your account.</h4> 
  <form>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
      <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-3 py-3 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
      <input type="password" id="password" name="password" className="border border-gray-300 rounded-lg px-3 py-3 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
    </div>
    <div className='' >
   <h6 className=" text-black hover:underline text-sm text-right"><a href="#" >Forgot Password?</a></h6><br/>
    <input type="checkbox" id="remember" name="remember" className="mr-2" />
    <span className="text-gray-700 text-sm">Remember Me</span><br/>
    <button type="submit" className="w-full mt-4 bg-black text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
    <h2 className="text-[#4C4C4D] font-['Be_Vietnam_Pro',_sans-serif] mt-4 text-[18px] font-normal leading-[18.77px] text-center">
    OR</h2> 
    <button type="submit" className="w-full mt-4 bg-white text-black py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
      Login with Google
    </button>
    <h4 className="text-[#4C4C4D] font-['Be_Vietnam_Pro',_sans-serif] mt-4 text-[18px] font-normal leading-[18.77px] text-center">
      Don’t have an account? Sign Up</h4>
    </div>
  </form>
</div>
</div>
  )
}
