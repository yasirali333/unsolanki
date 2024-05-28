'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Login_form() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setError('');

  
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    router.push('/pages/home');
  };

  return (
    <div className="flex justify-center items-center mt-10 bg-white mb-40">
      <div className="max-w-5xl w-full bg-gray-200 p-10 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold font-['Be_Vietnam_Pro',_sans-serif] text-gray-800 mb-4 text-center">Login</h2>
        <h4 className="text-[#4C4C4D] text-[18px] font-['Be_Vietnam_Pro',_sans-serif] font-normal leading-[18.77px] text-center">
          Welcome back! Please log in to access your account.
        </h4>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-lg px-3 py-3 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="border border-gray-300 rounded-lg px-3 py-3 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center pt-7"
              onClick={togglePasswordVisibility}>
              <Image src={'/show.png'} alt="show_password" width={25} height={25} />
            </button>
          </div>
          <div className=''>
            <h6 className="text-black hover:underline text-sm text-right">
              <a href="#">Forgot Password?</a>
            </h6>
            <br />
            <input type="checkbox" id="remember" name="remember" className="mr-2" />
            <span className="text-gray-700 text-sm">Remember Me</span>
            <br />
            <button
              type="submit"
              className="w-full mt-4 bg-black text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
            <h2 className="text-[#4C4C4D] font-['Be_Vietnam_Pro',_sans-serif] mt-4 text-[18px] font-normal leading-[18.77px] text-center">
              OR
            </h2>
            <div className="flex space-x-2 w-full mt-4 item-center justify-center bg-white text-black py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              <Image src={'/google_logo.png'} alt="google_logo" width={25} height={25} />
              <button>Login with Google</button>
            </div>
            <div className='flex space-x-1 item-center justify-center '>
              <h4 className="text-[#4C4C4D] font-['Be_Vietnam_Pro',_sans-serif] mt-4 text-[18px] font-normal leading-[18.77px]">
                Don’t have an account?
                 <span className='font-semibold text-[14px] md:text-[18px] '>
                  Sign Up</span>
              </h4>
              <Image src={'/arrow.png'} alt="arrow" width={30} height={15} 
              className='mt-4 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'  />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

