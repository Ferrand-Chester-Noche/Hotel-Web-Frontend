// bookhist/page.jsx

import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../styles/booking.css'; // Import your CSS file
import NavbarFront from '@/components/navbarfront';

const BookingHistory = () => {
  const bookings = [
    {
      brn: '123ABC',
      primaryGuestName: 'John Doe',
      paymentMethod: 'Credit Card',
      paymentStatus: 'Paid',
    },
    // Add more booking objects as needed
  ];

  return (
    <div>
      <NavbarFront />
      <BookingSidebar />
      <div style={{ marginLeft: '250px' }}>
      <div className={styles['booking-history']}>
        <h2>Booking History</h2>
        <form className={styles['booking-history-form']}>
          <label>
            Enter BRN:
            <input type="text" />
          </label>
          <br></br>
        </form>

        <p>Bill:</p>

        
        <table className={styles['booking-history-table']}>
          <thead>
            <tr>
              <th>BRN</th>
              <th>Primary Guest Name</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.brn}</td>
                <td>{booking.primaryGuestName}</td>
                <td>{booking.paymentMethod}</td>
                <td>{booking.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default BookingHistory;
