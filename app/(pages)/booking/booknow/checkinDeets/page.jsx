// BookingDetails.jsx
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../../styles/booking.css'; // Import your CSS file
import NavbarFront from '@/components/navbarfront';
import Link from 'next/link';


const BookingDetails = () => {
  return (
    <div>
      <NavbarFront />
      <BookingSidebar />
      <div style={{ marginLeft: '300px', marginTop: '70px', zIndex: '-1'}}>
      
      <div className="Title" 
        style={{ width: 440, height: 92, color: '#8A596B', fontSize: 85, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
        Book now!
      </div>

      <div className="Subtext mt-1" style={{width: 586, height: 38, color: '#C19AA8', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
        Select the best room for your customers.
      </div>

      
      <div className="flex mt-5">
      <div className="flex gap-20">
        <a href="/booking" className= "relative text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#8A596B] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <img src="/b31.png" alt="Button 1" className="w-40 cursor-pointer" />
        </a>
        <a href="/booking/booknow" className= "transform scale-110 mr-4 relative text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#8A596B] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <img src="/b12.png" alt="Button 2" className="w-40 cursor-pointer" />
        </a>
        <a href="/booking/booknow/checkinDeets" className= "relative text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#E8EBFA] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <img src="/b33.png" alt="Button 3" className="w-40 cursor-pointer" />
        </a>
      </div>
    </div>

      
      <div>
        <h2>Booking Details:</h2>
        <p>Check in Date: -- -- --</p>
        <p>Check out Date: -- -- --</p>

        <div className="box">
          <h3>Booking date:</h3>
          <p>Guest Names:</p>
          <p>Room Type/s and Qty:</p>
          <p>Room Numbers:</p>
        </div>
        <Link href="/booking">
          <button className={styles.button}>+book another room</button>
        </Link> 
        <br></br>
        <button className={styles.button}>confirm booking</button>   
      </div>
    </div>
    </div>
    
  );
};

export default BookingDetails;
