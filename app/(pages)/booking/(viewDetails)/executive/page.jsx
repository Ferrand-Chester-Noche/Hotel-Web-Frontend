// DeluxeDetails.jsx
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../../styles/booking.css';
import Link from 'next/link';
import NavbarFront from '@/components/navbarfront';

const ExecDetails = () => {
  return (
    <div>
      <NavbarFront />
      <BookingSidebar />
      <div style={{ marginLeft: '250px' }}>
       <div>
            <h2>Type: Executive</h2>
            <p>Price per night: $20,000</p>

            <div className="inclusions">
                <h3>Inclusions:</h3>
                <ul>
                <li>Housekeeping</li>
                <li>Massage/Spa</li>
                <li>Laundry</li>
                <li>Room Service</li>
                <li>Guided Tour</li>
                <li>Transportation</li>
                <li>Shoe Shining</li>
                </ul>
            </div>
            <Link href="/booking/">
                <button className={styles.button}>back</button>
            </Link> 
        </div> 
    </div>
    </div>
    
  );
};

export default ExecDetails;
