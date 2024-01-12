'use client';

import { useState } from 'react';
//import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

const LoginPage = () => {
  //const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // CONFIGURE API HERE ------------------------------------------------- re-activate line 4, 9 | re-activate line 78 to "<form className="mt-6" onSubmit={handleLogin}>"
  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.ok) {
  //       const { EMPLOYEE_TYPE } = await response.json();
  //       if (EMPLOYEE_TYPE === 'Front Desk') {
  //         router.push('/booking');
  //       } else if (EMPLOYEE_TYPE === 'Housekeeping') {
  //         router.push('/servicesmgmt');
  //       } else if (EMPLOYEE_TYPE === 'Kitchen') {
  //         router.push('/servicesmgmt');
  //       } else if (EMPLOYEE_TYPE === 'Concierge') {
  //         router.push('/servicesmgmt');
  //       } else if (EMPLOYEE_TYPE === 'Supervisor') {
  //         router.push('/employeemgmt');
  //       } else {
  //         setErrorMessage('Account is invalid');
  //       }
  //     } else {
  //       setErrorMessage('Invalid email or password');
  //     }
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     setErrorMessage('An error occurred during login');
  //   }
  // };

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className='relative w-full h-screen overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image src="/loginbg.jpg" alt="background image" layout="fill" objectFit="cover" />
        </div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  shadow-md lg:max-w-xl rounded-3xl"
          style={{ 
            marginTop: '25px',
            backgroundColor: '#f3d4cd', 
            backgroundPosition: 'right 5px top', 
            padding: '35px 65px', 
            fontFamily: 'Roboto, sans-serif' }}
        >
          <div className="flex justify-center mb-6">
            <img src="/logo1.png" alt="logo" className="h-36" />
          </div>
          <h1 className="text-l font-bold text-center" style={{ color: '#513f5c' }}>
            HOTEL MANAGEMENT SYSTEM LOGIN
          </h1>
          <form className="mt-6">
         {/* //onSubmit={handleLogin}> */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold"
                style={{ color: '#513f5c' }}
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-513f5c bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold"
                style={{ color: '#513f5c' }}
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                style={{ backgroundColor: '#513f5c' }}
              >
                LOGIN
              </button>
            </div>
            {errorMessage && <p className="mt-4 text-sm text-center text-red-500">{errorMessage}</p>}
          </form>
          <p className="mt-4 text-sm text-center text-gray-700">
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
