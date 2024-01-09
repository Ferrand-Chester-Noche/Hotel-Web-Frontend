// DeluxeDetails.jsx
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../../styles/booking.css'; // Import your CSS file
import Link from 'next/link';

const DeluxeDetails = () => {
  return (
    <div>
        <BookingSidebar />
       <div>
            <h2>Type: Deluxe</h2>
            <p>Price per night: $10,000</p>

            <div className="inclusions">
                <h3>Inclusions:</h3>
                <ul>
                <li>Housekeeping</li>
                </ul>
            </div>
            <Link href="/booking/">
                <button className={styles.button}>back</button>
            </Link> 
        </div> 
    </div>
    
  );
};

export default DeluxeDetails;
