'use client';
import NavbarFront from '@/components/navbarfront';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../styles/booking.css'; // Import your CSS file

const BookingPage = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    numberOfGuests: '',
    checkInDate: '',
    checkOutDate: '',
  });

  // Function to update form data
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Log the input values to the console
    console.log('Form Data:', formData);
    // Add logic for further actions if needed
  };

  return (
    <div>
      <NavbarFront />
      <BookingSidebar />
      <div style={{ marginLeft: '300px', marginTop: '0px', zIndex: '-1' }}>
        <div className="Title" style={{ width: 440, height: 92, color: '#8A596B', fontSize: 85, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
          Book now!
        </div>

        <div className="Subtext mt-1" style={{ width: 586, height: 38, color: '#C19AA8', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
          Select the best room for your customers.
        </div>

        <div className="flex mt-5">
          <div className="flex gap-20">
            <a href="/booking" className="relative text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#E8EBFA] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              <img src="/b11.png" alt="Button 1" className="w-40 cursor-pointer" />
            </a>
            <a href="/booking/booknow" className="relative transform scale-110 mr-4 text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#8A596B] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              <img src="/b12.png" alt="Button 2" className="w-40 cursor-pointer" />
            </a>
            <a href="/booking/booknow/checkinDeets" className="relative text-m w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#8A596B] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              <img src="/b13.png" alt="Button 3" className="w-40 cursor-pointer" />
            </a>
          </div>
        </div>


        <form onSubmit={handleFormSubmit}>
          <div className="Rectangle1 mt-12 grid grid-cols-3 gap-0.5" style={{ width: 1391, height: 138, padding: '10px', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            <label>
              *Number of Guests:
              <select
                className={styles.input}
                style={{
                  width: 'calc(100% - 40px)',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  height: '45px'
                }}
                required
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
              >
                <option value="" disabled selected hidden>1-9</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </label>
            <label>
              *Check-in Date:
              <input
                type="date"
                className={styles.input}
                required
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Check-out Date:
              <input
                type="date"
                className={styles.input}
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleInputChange}
              />
            </label>

            <button
              type="submit" style={{ width: '200px'}}>
              Check Availability
            </button>


          </div>
        </form>


        <div style={{ width: 224, height: 38, color: 'black', fontSize: 23, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', marginTop: "20px" }}>Available rooms: </div>


        <div className="grid grid-cols-4 gap-0.5 w-3/4">
          <div className="container" style={{ position: 'relative', scale: 0.8, width: 340, height: 350, left: 9, top: 0, background: '#FAFAFA', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 50 }}>
            <Image src="/deluxe1.jpg" alt="Deluxe Room" width={400} height={400} style={{ borderRadius: 30 }} />
            <h2 style={{ position: 'absolute', top: '50px', left: '87px', fontSize: '50px', color: '#dec7d7', fontWeight: 'bold', fontFamily: 'Georgia, serif' }}>Deluxe</h2>
            <p>
            </p>
            <p style={{ fontSize: '17px', position: 'relative', top: '10px' }}>Books 4 people</p>
            <p style={{ fontSize: '17px', position: 'relative', bottom: '5px' }}>Includes 2 double beds</p>
            <Link href="http://localhost:3000/booking/booknow">
              <button p style={{ position: 'relative', bottom: '10px' }}>Book Now</button>
            </Link>
            <p></p>
            <Link style={{ fontSize: '13px', position: 'relative', bottom: '19px' }} className="underline text-[#8A596B] hover:text-[#E8EBFA]" href="http://localhost:3000/booking/deluxe">
              View Details
            </Link>
          </div>

          <div className="container" style={{ position: 'relative', scale: 0.8, width: 340, height: 350, left: 9, top: 0, background: '#FAFAFA', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 50 }}>
            <Image src="/grand1.jpg" alt="Grand Room" width={400} height={400} style={{ borderRadius: 30 }} />
            <h2 style={{ position: 'absolute', top: '50px', left: '87px', fontSize: '50px', color: '#dec7d7', fontWeight: 'bold', fontFamily: 'Georgia, serif' }}>Grand</h2>
            <p>
            </p>
            <p style={{ fontSize: '17px', position: 'relative', top: '10px' }}>Books 5 people</p>
            <p style={{ fontSize: '17px', position: 'relative', bottom: '5px' }}>Includes 2 queen beds</p>
            <Link href="http://localhost:3000/booking/booknow">
              <button p style={{ position: 'relative', bottom: '10px' }}>Book Now</button>
            </Link>
            <p></p>
            <Link style={{ fontSize: '13px', position: 'relative', bottom: '19px' }} className="underline text-[#8A596B] hover:text-[#E8EBFA]" href="http://localhost:3000/booking/grand">
              View Details
            </Link>
          </div>

          <div className="container" style={{ position: 'relative', scale: 0.8, width: 340, height: 350, left: 9, top: 0, background: '#FAFAFA', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 50 }}>
            <Image src="/suite1.jpg" alt="Suite Room" width={400} height={400} style={{ borderRadius: 30 }} />
            <h2 style={{ position: 'absolute', top: '50px', left: '105px', fontSize: '50px', color: '#dec7d7', fontWeight: 'bold', fontFamily: 'Georgia, serif' }}>Suite</h2>
            <p>
            </p>
            <p style={{ fontSize: '17px', position: 'relative', top: '10px' }}>Books 6 people</p>
            <p style={{ fontSize: '17px', position: 'relative', bottom: '5px' }}>Includes 3 queen beds</p>
            <Link href="http://localhost:3000/booking/booknow">
              <button p style={{ position: 'relative', bottom: '10px' }}>Book Now</button>
            </Link>
            <p></p>
            <Link style={{ fontSize: '13px', position: 'relative', bottom: '19px' }} className="underline text-[#8A596B] hover:text-[#E8EBFA]" href="http://localhost:3000/booking/suite">
              View Details
            </Link>
          </div>
          <div className="container" style={{ position: 'relative', scale: 0.8, width: 340, height: 350, left: 9, top: 0, background: '#FAFAFA', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 50 }}>
            <Image src="/executive1.jpg" alt="Suite Room" width={400} height={200} style={{ borderRadius: 30 }} />
            <h2 style={{ position: 'absolute', top: '50px', left: '47px', fontSize: '50px', color: '#dec7d7', fontWeight: 'bold', fontFamily: 'Georgia, serif' }}>Executive</h2>
            <p>
            </p>
            <p style={{ fontSize: '17px', position: 'relative', top: '10px' }}>Books 9 people</p>
            <p style={{ fontSize: '17px', position: 'relative', bottom: '5px' }}>Includes 3 king beds</p>
            <Link href="http://localhost:3000/booking/booknow">
              <button p style={{ position: 'relative', bottom: '10px' }}>Book Now</button>
            </Link>
            <p></p>
            <Link style={{ fontSize: '13px', position: 'relative', bottom: '19px' }} className="underline text-[#8A596B] hover:text-[#E8EBFA]" href="http://localhost:3000/booking/executive">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BookingPage;