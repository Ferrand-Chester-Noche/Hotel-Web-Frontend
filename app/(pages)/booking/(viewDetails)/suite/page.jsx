// DeluxeDetails.jsx
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../../styles/booking.css'; // Import your CSS file
import Link from 'next/link';
import NavbarFront from '@/components/navbarfront';

const SuiteDetails = () => {
  return (
    <div>
      <NavbarFront />
      <BookingSidebar />

      <div style={{ marginLeft: '300px', marginTop: '5px', zIndex: '-3' }}>

      <Link href="/booking" >
        <button style={{ position: "relative", marginTop: '30px' }} >Back to Booking</button>
      </Link>

        <div className="Title"
          style={{ position: 'absolute', top: '300px', left: '450px', width: 440, height: 92, color: '#8A596B', fontSize: 150, fontFamily: 'Inter', fontWeight: '700', }}>
          Suite
        </div>


        <div style={{ position: 'relative', width: '1425px' }}>

          <section>
            <div class="slider-wrapper" style={{ maxWidth: '600px', marginRight: '300px' }}>
              <div class="slider">
                <img id="slide-1" src="/s1.jpg" alt="pic1" />
                <img id="slide-2" src="/suite2.jpg" alt="pic2" />
                <img id="slide-3" src="/suite3.jpg" alt="pic3" />

              </div>
              <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
              </div>
            </div>
          </section>


          <div className="DescriptionDeluxe" style={{ width: 1443, color: '#5D5D5D', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', position: 'relative', top: '70px' }}>
          Welcome to our expansive Suite, a haven of luxury that caters to groups of up to six guests. With three lavish queen beds, this room invites you to unwind in style and comfort. The Suite offers a seamless blend of sophistication and practicality, providing ample space for relaxation and socializing. Immerse yourself in the elevated ambiance of our Suite, where each corner is thoughtfully designed to create a memorable and indulgent experience for your group. Whether it's a family vacation or a getaway with friends, our Suite ensures that your stay is nothing short of extraordinary.
            <br /><br /></div>

          <div className="Line1" style={{ width: 1425, height: 0, border: '1px #D3D3D3 solid', position: 'relative', top: '70px' }} />


          <div className="Group2" style={{ width: 1357, height: 63, position: 'relative', top: '110px' }}>
            <div className="BooksAMaximumOf4Guests" style={{ width: 359, height: 37, left: 70, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Books a maximum of 6 guests</div>
            <div className="ServicesIncludeHousekeeping" style={{ width: 300, height: 63, left: 600, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400' }}>Services Include:<br />Housekeeping, Massage and Spa,
              <br />Laundry, Room Service
              <br />Guided Tour


            </div>
            <div className="PricePerNight12500Php" style={{ width: 329, height: 41, left: 1128, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Price per night: 17,500 PHP</div>
          </div>

        </div>


        <div classname="pb-100px"></div>
      </div>
    </div>

  );
};

export default SuiteDetails;
