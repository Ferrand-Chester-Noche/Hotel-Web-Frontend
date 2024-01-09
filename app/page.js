import React from 'react';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src="/loginbg.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Floating Window Division */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 shadow-md lg:max-w-xl rounded-3xl" style={{ backgroundColor: '#f3d4cd', backgroundPosition: 'right 5px top' }}>
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo1.png" alt="logo" className="h-36" />
        </div>
        {/* Rest of the content */}
        <h1 className="text-l font-bold text-center text-gray-700">HOTEL MANAGEMENT SYSTEM LOGIN</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="email"
              
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="password"
            />
          </div>
          <div className="mt-8">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" 
            style={{ backgroundColor: '#513f5c' }} >
              LOGIN
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-700">
          {/* Additional content */}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
