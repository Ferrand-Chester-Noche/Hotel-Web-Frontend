'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavbarFront = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const handleSignOut = () => {
  //   // insert API logic here to signout user
  //   router.push('/');
  // };

  return (
    <div>
    <div style={{ height: '145px' }}></div>
    <div className="fixed top-0 left-0 w-full">
      <nav className="border-gray-200" style={{ backgroundColor: '#563643' }}>
        <div className="flex flex-wrap justify-between items-center p-4 md:p-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/whitelogo1.png" className="h-12 ml-7" alt="Hotel Logo" />
            
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse mr-4">
            <p style={{ color: 'white', fontSize: '15px', marginTop: '15px' }}>{currentTime}</p>
            <Link href="/" 
            //onClick={handleSignOut} 
            className="text-m bg-[#623744] text-[#E8EBFA] py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#E8EBFA] hover:text-[#51708a]">
              Sign Out
            </Link>

          </div>
        </div>
      </nav>
      <nav style={{ backgroundColor: '#f6cdc9' }}>
        <div className="px-12 py-3 mx-auto" style={{ marginLeft: '9px'}}>
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-m">
              <li>
                <Link href="/booking" className="relative text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#E8EBFA] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" style={{color: '#7f5262' }}>Booking</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
  
  
};

export default NavbarFront;
