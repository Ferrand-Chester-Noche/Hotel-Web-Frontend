// BookingDetails.jsx
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../../styles/booking.css'; // Import your CSS file
import NavbarFront from '@/components/navbarfront';


const BookingDetails = () => {
  return (
    <div>
      <NavbarFront />
      <BookingSidebar />
      <div style={{ marginLeft: '250px' }}>
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
        <button className={styles.button}>confirm booking</button>   
      </div>
    </div>
    </div>
    
  );
};

export default BookingDetails;
