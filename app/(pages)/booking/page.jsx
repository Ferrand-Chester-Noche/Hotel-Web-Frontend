import NavbarFront from '@/components/navbarfront';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../styles/booking.css'; // Import your CSS file

const BookingPage = () => {
  return (
    <div>
      <NavbarFront />
      <BookingSidebar />
      <div>
        <form>
          <label>
            Number of Guests:
            <input type="text" placeholder="0" className={styles.input} /* Apply input styles */ />
          </label>
          <button className={styles.button}>Enter</button>
        </form>
        <div className="container">
          <h2>Deluxe</h2>
            <Image src="/assets/deluxeRoom.jpg" alt="Deluxe Room" width={300} height={200} />
            <Link href="http://localhost:3000/booking/booknow">
            <button>Book Now</button>
          </Link>
          <Link href="http://localhost:3000/booking/deluxe">
            <button>View Details</button>
          </Link>
        </div>
        <div className="container">
          <h2>Grand</h2>
          <Image src="/deluxeRoom.jpg" alt="Deluxe Room" width={300} height={200} />        
          <p>This is the second container</p>
          <Link href="http://localhost:3000/booking/booknow">
            <button>Book Now</button>
          </Link>
          <Link href="http://localhost:3000/booking/grand">
            <button>View Details</button>
          </Link>
        </div>
        <div className="container">
          <h2>Suite</h2>
          <p>This is the third container</p>
          <Link href="http://localhost:3000/booking/booknow">
            <button>Book Now</button>
          </Link>
          <Link href="http://localhost:3000/booking/suite">
            <button>View Details</button>
          </Link>
        </div>
        <div className="container">
          <h2>Executive</h2>
          <p>This is the fourth container</p>
          <Link href="http://localhost:3000/booking/booknow">
            <button>Book Now</button>
          </Link>
          <Link href="http://localhost:3000/booking/executive">
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
