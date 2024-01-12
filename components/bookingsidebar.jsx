import React from 'react';
import { HiOutlineDocumentText, HiOutlineClipboardList, HiOutlineClock } from 'react-icons/hi';

const BookingSidebar = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '250px',
        height: '100%',
        marginTop: '148px',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <li
          style={{
            marginBottom: '10px',
          }}
        >
          <a
            href="/booking"
            className='flex items-center py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#E8EBFA] hover:text-[#51708a]'
            style={{
              textDecoration: 'none',
              font: 'Inter',
              color: '#51405b',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            <HiOutlineDocumentText className="mr-2 text-xl" /> New Booking
          </a>
        </li>

        <li
          style={{
            marginBottom: '10px',
          }}
        >
          <a
            href="/booking"
            className='flex items-center py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#E8EBFA] hover:text-[#51708a]'
            style={{
              textDecoration: 'none',
              font: 'Inter',
              color: '#51405b',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            <HiOutlineClipboardList className="mr-2 text-xl" /> Manage Bookings
          </a>
        </li>

        <li
          style={{
            marginBottom: '10px',
          }}
        >
          <a
            href="/booking"
            className='flex items-center py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#E8EBFA] hover:text-[#51708a]'
            style={{
              textDecoration: 'none',
              font: 'Inter',
              color: '#51405b',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            <HiOutlineClock className="mr-2 text-xl" /> Booking History
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BookingSidebar;
