import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/booking.css'; // Import your CSS file

const BookingPage = () => {
  return (
    <div>
      <div className="container">
        <h2>Deluxe</h2>
        <p>This is the first container</p>
        <Link href="http://localhost:3000/booking/booknow">
          <button>Book Now</button>
        </Link>
        <Link href="http://localhost:3000/booking/viewDetails">
          <button>View Details</button>
        </Link>
      </div>
      <div className="container">
        <h2>Grand</h2>
        <p>This is the second container</p>
        <Link href="http://localhost:3000/booking/booknow">
          <button>Book Now</button>
        </Link>
        <Link href="http://localhost:3000/booking/viewDetails">
          <button>View Details</button>
        </Link>
      </div>
      <div className="container">
        <h2>Suite</h2>
        <p>This is the third container</p>
        <Link href="http://localhost:3000/booking/booknow">
          <button>Book Now</button>
        </Link>
        <Link href="http://localhost:3000/booking/viewDetails">
          <button>View Details</button>
        </Link>
      </div>
      <div className="container">
        <h2>Executive</h2>
        <p>This is the fourth container</p>
        <Link href="http://localhost:3000/booking/booknow">
          <button>Book Now</button>
        </Link>
        <Link href="http://localhost:3000/booking/viewDetails">
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BookingPage;
