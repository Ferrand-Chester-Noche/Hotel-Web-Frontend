import React from 'react';
import Link from 'next/link';
import styles from '../styles/bookingsidebar.module.css';

const BookingSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/booking">
            New Booking
          </Link>
        </li>
        <li>
          <Link href="/booking/bookview">
            View Booking
          </Link>
        </li>
        <li>
          <Link href="/booking/bookhist">
            Booking History
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BookingSidebar;
