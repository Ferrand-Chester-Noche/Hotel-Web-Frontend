// BookNow.jsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../styles/booking.css'; // Import your CSS file
import NavbarFront from '@/components/navbarfront';

const BookNow = () => {
  // State variables for guest details
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Log the form data to the console
    console.log('First Name:', firstName);
    console.log('Middle Name:', middleName);
    console.log('Last Name:', lastName);
    console.log('Birthday:', birthday);
    console.log('Address:', address);
    console.log('Contact Number:', contactNumber);
    console.log('Email Address:', emailAddress);

    // You can perform additional actions with the form data here
  };

  return (
    <div>
      <NavbarFront />
      <BookingSidebar />
      <div style={{ marginLeft: '300px', marginTop: '0px', zIndex: '-1'}}>

        <div className="Title" 
          style={{ width: 440, height: 92, color: '#8A596B', fontSize: 85, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
          Book now!
        </div>

        <div className="Subtext mt-1" style={{width: 586, height: 38, color: '#C19AA8', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
          Select the best room for your customers.
        </div>

        <div className="flex mt-5" style={{zIndex: '-1'}}>
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



        <div className="container" style={{ width: '50%', marginTop: '30px' }} >
          <h2>Enter Primary guests details</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              First Name
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={styles.input}
                id="firstName"
                name="firstName"
              />
            </label>
            <label>
              Middle Name
              <input
                type="text"
                placeholder="Middle name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                className={styles.input}
                id="middleName"
                name="middleName"
              />
            </label>
            <label>
              <br></br>
              Last Name
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={styles.input}
                id="lastName"
                name="lastName"
              />
            </label>
            <label>
              Birthday
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className={styles.input}
                id="birthday"
                name="birthday"
              />
            </label>
            <label>
              Address
              <input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={styles.input}
                id="address"
                name="address"
              />
            </label>
            <label>
              Contact Number
              <input
                type="tel"
                placeholder="Enter contact number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className={styles.input}
                id="contactNumber"
                name="contactNumber"
              />
            </label>
            <label>
              Email Address
              <input
                type="email"
                placeholder="Enter email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className={styles.input}
                id="emailAddress"
                name="emailAddress"
              />
            </label>
            <button type="submit" className={styles.button} style={{color: 'black'}}>Submit</button>
          </form>
        </div>



        <div>
          <br></br>  
          <Link href="/booking/booknow/checkinDeets">
            <button className={styles.button} style={{color: 'black'}}>Confirm Booking</button>
          </Link>      
        </div>
        <div style={{padding: '50px'}}></div>
      </div>
    </div>
  );
};

export default BookNow;
