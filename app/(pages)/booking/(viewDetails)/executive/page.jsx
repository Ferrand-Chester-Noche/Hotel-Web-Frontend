
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import Link from 'next/link';
import NavbarFront from '@/components/navbarfront';
import Image from "next/image";
import styles from '../../../../../styles/booking.css';

const  ExecutiveDetails = () => {
  return (
    <div>
      <NavbarFront />
      <BookingSidebar />

      <div style={{ marginLeft: '300px', marginTop: '5px', zIndex: '-3' }}>

      <Link href="/booking" >
        <button style={{ position: "relative", marginTop: '30px' }} >Back to Booking</button>
      </Link>

        <div className="Title"
          style={{ position: 'absolute', top: '300px', left: '450px', width: 440, height: 92, color: '#8A596B', fontSize: 100, fontFamily: 'Inter', fontWeight: '700', }}>
          Executive
        </div>


        <div style={{ position: 'relative', width: '1425px' }}>

          <section>
            <div class="slider-wrapper" style={{ maxWidth: '600px', marginRight: '300px' }}>
              <div class="slider">
                <img id="slide-1" src="/e1.jpg" alt="pic1" />
                <img id="slide-2" src="/executive2.jpg" alt="pic2" />
                <img id="slide-3" src="/executive3.jpg" alt="pic3" />

              </div>
              <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
              </div>
            </div>
          </section>


          <div className="DescriptionDeluxe" style={{ width: 1443, color: '#5D5D5D', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', position: 'relative', top: '30px' }}>
            Experience the epitome of luxury in our Executive Room, an exclusive accommodation for up to nine guests. This expansive space boasts three king beds, offering unparalleled comfort and refinement. Ideal for larger groups or corporate gatherings, the Executive Room is designed to cater to your every need. Revel in the sophisticated ambiance, where a seamless integration of style and functionality ensures a truly lavish experience. Elevate your stay with the unmatched luxury of our Executive Room, where each moment is crafted to leave a lasting impression on you and your companions.
            <br /><br /></div>

          <div className="Line1" style={{ width: 1425, height: 0, border: '1px #D3D3D3 solid', position: 'relative', top: '30px' }} />


          <div className="Group2" style={{ width: 1357, height: 63, position: 'relative', top: '50px' }}>
            <div className="BooksAMaximumOf4Guests" style={{ width: 359, height: 37, left: 70, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Books a maximum of 9 guests</div>
            <div className="ServicesIncludeHousekeeping" style={{ width: 300, height: 63, left: 600, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400' }}>Services Include:<br />Housekeeping, Massage and Spa,
              <br />Laundry, Room Service
              <br />Guided Tour, Transportation
              <br />Shoe Shining
            </div>
            <div className="PricePerNight12500Php" style={{ width: 329, height: 41, left: 1128, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Price per night: 20,000 PHP</div>
          </div>

        </div>


        <div classname="pb-100px"></div>
      </div>
    </div>

  );
};

export default ExecutiveDetails;
