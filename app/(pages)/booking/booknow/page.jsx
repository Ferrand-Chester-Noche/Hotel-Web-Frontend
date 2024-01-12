// BookNow.jsx
import React from 'react';
import Link from 'next/link';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../styles/booking.css'; // Import your CSS file
import NavbarFront from '@/components/navbarfront';

const BookNow = () => {
  return (
    <div>
      <NavbarFront />
      <BookingSidebar />
      <div style={{ marginLeft: '250px' }}>
      <div className="container" /* Apply styles from the imported CSS file */>
        <h2>Enter primary guest details</h2>
        <form>
          <label>
            Name:
            <input type="text" placeholder="Enter name" className={styles.input} /* Apply input styles */ />
          </label>
          <label>
            Birthday:
            <input type="date" className={styles.input} /* Apply input styles */ />
          </label>
          <label>
            Address:
            <input type="text" placeholder="Enter address" className={styles.input} /* Apply input styles */ />
          </label>
          <label>
            Contact Number:
            <input type="tel" placeholder="Enter contact number" className={styles.input} /* Apply input styles */ />
          </label>
          <label>
            Email Address:
            <input type="email" placeholder="Enter email address" className={styles.input} /* Apply input styles */ />
          </label>
          <button className={styles.button}>Add other guests</button>
          <button type="submit" className={styles.button}>Check-in</button>
        </form>
      </div>
      <div>
        <Link href="/booking/">
          <button className={styles.button}>+ book another room</button>
        </Link> 
        <br></br>  
        <Link href="/booking/booknow/checkinDeets">
          <button className={styles.button}>continue</button>
        </Link>      
      </div>
    </div>
    </div>
  );
};

export default BookNow;
