

// DeluxeDetails.jsx
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx'; 
import Link from 'next/link';
import NavbarFront from '@/components/navbarfront';
import Image from "next/image";
import styles from '../../../../../styles/booking.css';

const DeluxeDetails = () => {
  return (
    <div>
      <NavbarFront />
      <BookingSidebar />

      <div style={{ marginLeft: '300px', marginTop: '5px', zIndex: '-3' }}>

      <Link href="/booking" >
        <button style={{ position: "relative", marginTop: '30px' }} >Back to Booking</button>
      </Link>

        <div className="Title"
          style={{ position:'absolute', top: '270px', left: '450px', width: 440, height: 92, color: '#8A596B', fontSize: 150, fontFamily: 'Inter', fontWeight: '700', }}>
          Deluxe
        </div>


        <div style={{ position: 'relative', width: '1425px' }}>

          <section>
            <div class="slider-wrapper" style={{ maxWidth: '600px', marginRight:'300px' }}>
              <div class="slider">
                <img id="slide-1" src="/d1.jpg" alt="pic1" />
                <img id="slide-2" src="/deluxe2.jpg" alt="pic2" />
                <img id="slide-3" src="/deluxe3.jpg" alt="pic3" />

              </div>
              <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
              </div>
            </div>
          </section>


          <div className="DescriptionDeluxe" style={{ width: 1443, color: '#5D5D5D', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', position: 'relative', top: '70px' }}>
            Welcome to our Deluxe Room, a perfect retreat for up to four guests seeking a blend of comfort and style. Nestled within our hotel, this spacious accommodation is thoughtfully designed to ensure a delightful stay for you and your companions. The room features two luxurious double beds, inviting you to unwind in ultimate relaxation after a day of exploration or business meetings. Equipped with modern amenities, our Deluxe Room provides the perfect balance between convenience and indulgence. Whether you're traveling with family or friends, the inclusion of two double beds ensures a comfortable night's sleep for everyone.
            <br /><br /></div>

          <div className="Line1" style={{ width: 1425, height: 0, border: '1px #D3D3D3 solid', position: 'relative', top: '70px' }} />


          <div className="Group2" style={{ width: 1357, height: 63, position: 'relative', top: '110px' }}>
            <div className="BooksAMaximumOf4Guests" style={{ width: 359, height: 37, left: 70, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Books a maximum of 4 guests</div>
            <div className="ServicesIncludeHousekeeping" style={{ width: 208, height: 63, left: 660, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Services Include:<br />Housekeeping</div>
            <div className="PricePerNight12500Php" style={{ width: 329, height: 41, left: 1128, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Price per night: 10,000 PHP</div>
          </div>

        </div>


        <div classname="pb-100px"></div>
      </div>
    </div>

  );
};

export default DeluxeDetails;
