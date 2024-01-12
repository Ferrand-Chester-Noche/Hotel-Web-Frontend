// GuestDetails.jsx

import React from 'react';
import NavbarFront from '@/components/navbarfront';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../../../styles/booking.css'; // Import your CSS file
import Link from 'next/link';

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

      <div style={{marginTop: '40px', marginLeft:'40px', padding:'20px', width:'300px', height: 'auto', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
        {guests.map((guest, index) => (
          <div key={index}>
            <h2>Guest</h2>
            <p>Name: {guest.name}</p>
            <p>Birthday: {guest.birthday}</p>
            <p>Address: {guest.address}</p>
            <p>Contact Number: {guest.contactNumber}</p>
            <p>Email Address: {guest.emailAddress}</p>
            <div className={styles['button-group']}>
              <button styles>Check-out</button>
              <br></br>
              <Link href ="/booking/bookview">
              <button> Close </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>
  );
};

export default GuestDetails;
