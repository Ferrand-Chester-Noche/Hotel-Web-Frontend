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
      <div style={{ marginLeft: '300px', marginTop: '70px', zIndex: '-1'}}>

      <div className="Title" 
        style={{ width: 440, height: 92, color: '#8A596B', fontSize: 85, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
        Book now!
      </div>

      <div className="Subtext mt-1" style={{width: 586, height: 38, color: '#C19AA8', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
        Select the best room for your customers.
      </div>

      <div className="flex mt-5">
      <div className="flex gap-20">
        <a href="/booking" className= "relative text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#8A596B] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <img src="/b31.png" alt="Button 1" className="w-40 cursor-pointer" />
        </a>
        <a href="/booking/booknow" className= " transform scale-110 mr-4 relative text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#E8EBFA] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <img src="/b22.png" alt="Button 2" className="w-40 cursor-pointer" />
        </a>
        <a href="/booking/booknow/checkinDeets" className= "relative text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#8A596B] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <img src="/b13.png" alt="Button 3" className="w-40 cursor-pointer" />
        </a>
      </div>
    </div>


      <div className="container" /* Apply styles from the imported CSS file */>
        <h2>Enter primary guest details</h2>
        <form>
          <label>
            FirstName:
            <input type="text" placeholder="First name" className={styles.input} /* Apply input styles */ />
          </label>
          <label>
            MiddleName:
            <input type="text" placeholder="Middle name" className={styles.input} /* Apply input styles */ />
          </label>
          <label>
            LastName:
            <input type="text" placeholder="Last name" className={styles.input} /* Apply input styles */ />
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
        </form>
      </div>
      <div>
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
