// DeluxeDetails.jsx
import React from 'react';
import BookingSidebar from '@/components/BookingSidebar.jsx';
import styles from '../../../../../styles/booking.css'; // Import your CSS file
import Link from 'next/link';
import NavbarFront from '@/components/navbarfront';

const GrandDetails = () => {
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
          Grand
        </div>


        <div style={{ position: 'relative', width: '1425px' }}>

          <section>
            <div class="slider-wrapper" style={{ maxWidth: '600px', marginRight: '300px' }}>
              <div class="slider">
                <img id="slide-1" src="/g1.jpg" alt="pic1" />
                <img id="slide-2" src="/grand2.jpg" alt="pic2" />
                <img id="slide-3" src="/grand3.jpg" alt="pic3" />

              </div>
              <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
              </div>
            </div>
          </section>


          <div className="DescriptionDeluxe" style={{ width: 1443, color: '#5D5D5D', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', position: 'relative', top: '70px' }}>
          Indulge in the opulence of our Grand Room, designed to accommodate up to five guests in sheer elegance. This spacious retreat features two sumptuous queen beds, ensuring a restful night's sleep for all. The tastefully appointed decor creates an inviting atmosphere, while the extra space provides a luxurious backdrop for your stay. Revel in the comfort of our Grand Room, where every detail is curated to enhance your experience, making it an ideal haven for families or groups seeking both style and functionality.
            <br /><br /></div>

          <div className="Line1" style={{ width: 1425, height: 0, border: '1px #D3D3D3 solid', position: 'relative', top: '70px' }} />


          <div className="Group2" style={{ width: 1357, height: 63, position: 'relative', top: '110px' }}>
            <div className="BooksAMaximumOf4Guests" style={{ width: 359, height: 37, left: 70, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Books a maximum of 5 guests</div>
            <div className="ServicesIncludeHousekeeping" style={{ width: 300, height: 63, left: 600, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400' }}>Services Include:<br />Housekeeping, Massage and Spa,
              <br />Laundry
            </div>
            <div className="PricePerNight12500Php" style={{ width: 329, height: 41, left: 1128, top: 0, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Price per night: 12,500 PHP</div>
          </div>

        </div>


        <div classname="pb-100px"></div>
      </div>
    </div>

  );
};

export default GrandDetails;
