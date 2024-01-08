// BookNow.jsx
import React from 'react';
import styles from '../../../../styles/booking.css'; // Import your CSS file

const BookNow = () => {
  return (
    <div className="container" /* Apply styles from the imported CSS file */>
      <div>booknow</div>
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
  );
};

export default BookNow;
