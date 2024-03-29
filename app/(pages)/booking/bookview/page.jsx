// viewBooking.jsx
import React from 'react';
import NavbarFront from '@/components/navbarfront';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import Link from 'next/link';
import styles from '../../../../styles/booking.css'; // Import your CSS file

const ViewBooking = () => {
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
      <NavbarFront />
      <BookingSidebar />
      <div style={{ marginLeft: '300px' }}>

        <div className="Title"
          style={{ width: 'auto', height: 92, color: '#8A596B', fontSize: 85, fontFamily: 'Inter', fontWeight: '700' }}>
          Manage Bookings
        </div>

        <br></br>
        <br></br>
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
              {/* Additional row for more booking details */}
              <tr>
                <td>456DEF</td>
                <td>102, 103</td>
                <td>Checkedin</td>
                <td>
                  <Link href="http://localhost:3000/booking/bookview/checkDeets">
                    <button>Action</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewBooking;
