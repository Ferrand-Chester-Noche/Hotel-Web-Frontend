// GuestDetails.jsx

import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../../../styles/booking.css'; // Import your CSS file
import NavbarFront from '@/components/navbarfront';

const GuestDetails = () => {
  const guests = [
    {
      name: 'John Doe',
      birthday: 'January 1, 1990',
      address: '123 Street Ave, City, Country',
      contactNumber: '+1234567890',
      emailAddress: 'john@example.com',
    },
    // Add more guest objects as needed
  ];

  return (
    <div>
      <NavbarFront />
      <BookingSidebar />
      <div style={{ marginLeft: '250px' }}>
      <div>
        {guests.map((guest, index) => (
          <div key={index} className={styles['guest-container']}>
            <h2>Guest {index + 1} Details</h2>
            <p>Name: {guest.name}</p>
            <p>Birthday: {guest.birthday}</p>
            <p>Address: {guest.address}</p>
            <p>Contact Number: {guest.contactNumber}</p>
            <p>Email Address: {guest.emailAddress}</p>
            <div className={styles['button-group']}>
              <button className={styles['check-in-button']}>Check-out</button>
              <button className={styles['cancel-booking-button']}>
                Close
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default GuestDetails;
