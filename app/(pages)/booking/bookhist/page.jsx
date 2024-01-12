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
      
      <div style={{ marginLeft: '300px' }}>

      <div className="Title" 
        style={{ width: 'auto', height: 92, color: '#8A596B', fontSize: 85, fontFamily: 'Inter', fontWeight: '700'}}>
        Booking History
      </div>

      <br></br>
      <br></br>
      <div className="Line1" style={{ width: '3/4', height: 0, border: '1px #D3D3D3 solid', position: 'relative', top: '70px' }} />
      
      <div> 
        <form>
          <label>
            Booking Reference Number  
            <input type="text" style={{width:'430px', marginLeft: "20px"}} />
          </label>
          <br></br>
        </form>
        </div>


        <br></br>
        <br></br>
        <table >
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
