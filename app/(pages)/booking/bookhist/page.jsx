// bookhist/page.jsx

import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../styles/booking.css'; // Import your CSS file

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
      <BookingSidebar />
      <div className={styles['booking-history']}>
        <h2>Booking History</h2>
        <form className={styles['booking-history-form']}>
          <label>
            Enter BRN:
            <input type="text" />
          </label>
          <br></br>
          <label>
            Bill:<br></br>
            <input type="number" />
          </label>
        </form>
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
  );
};

export default BookingHistory;
