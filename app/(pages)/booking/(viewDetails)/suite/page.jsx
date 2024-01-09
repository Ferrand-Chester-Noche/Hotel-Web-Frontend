// DeluxeDetails.jsx
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../../styles/booking.css'; // Import your CSS file
import Link from 'next/link';

const SuiteDetails = () => {
  return (
    <div>
        <BookingSidebar />
       <div>
            <h2>Type: Suite</h2>
            <p>Price per night: $17,500</p>

            <div className="inclusions">
                <h3>Inclusions:</h3>
                <ul>
                <li>Housekeeping</li>
                <li>Massage/Spa</li>
                <li>Laundry</li>
                <li>Room Service</li>
                <li>Guided Tour</li>
                </ul>
            </div>
            <Link href="/booking/">
                <button className={styles.button}>back</button>
            </Link> 
        </div> 
    </div>
    
  );
};

export default SuiteDetails;
