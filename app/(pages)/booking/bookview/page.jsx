// BookingHistory.jsx
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import Link from 'next/link';
import styles from '../../../../styles/booking.css'; // Import your CSS file

const viewBooking = () => {
  const bookings = [
    {
      brn: '123ABC',
      roomNumber: '101',
      status: 'Booked',
    },
    // Add more booking objects as needed
  ];

  return (
    <div>
        <BookingSidebar />
        <div>
            <table>
                <thead>
                <tr>
                    <th>BRN</th>
                    <th>Room Number/s</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {bookings.map((booking, index) => (
                    <tr key={index}>
                    <td>{booking.brn}</td>
                    <td>{booking.roomNumber}</td>
                    <td>{booking.status}</td>
                    <td>
                        <Link href="http://localhost:3000/booking/bookview/bookDeets">
                            <button>Action</button>
                        </Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      
    </div>
  );
};

export default viewBooking;
