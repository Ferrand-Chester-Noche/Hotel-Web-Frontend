// servicesmgmt/page.jsx

'use client';
import React, { useState } from 'react';
import NavbarAdmin from '@/components/navbaradmin';
import styles from '../../../styles/booking.css'; // Import your CSS file

const ServicesManagementPage = () => {
  // State variables for BRN, charges, and service details
  const [brn, setBrn] = useState('');
  const [quantityHousekeeping, setQuantityHousekeeping] = useState('');
  const [quantityKitchen, setQuantityKitchen] = useState('');

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform actions with the saved data (e.g., send to server)
    console.log('BRN:', brn);
    console.log('Quantity Housekeeping:', quantityHousekeeping);
    console.log('Quantity Kitchen:', quantityKitchen);
  };

  const services = [
    {
      name: 'Shoe Shining',
      price: '200 PHP',
    },
    // Add more guest objects as needed
  ];

  return (
    <div>
      <NavbarAdmin />

      <div style={{ marginLeft: '40px' }}>

        <div className="Title"
          style={{ width: 'auto', height: 92, color: '#8A596B', fontSize: 85, fontFamily: 'Inter', fontWeight: '700' }}>
          Manage Services
        </div>

        <br></br>
        <br></br>
        <div className="Line1" style={{ width: '3/4', height: 0, border: '1px #D3D3D3 solid', position: 'relative', top: '70px' }} />

        <form onSubmit={handleFormSubmit}>
          <div>
            <form>
              <label>
                Booking Reference Number
                <input type="text" value={brn} onChange={(e) => setBrn(e.target.value)} style={{ width: '500px', marginLeft: "20px" }} />
              </label>
            </form>
          </div>
          <br></br>
          <br></br>

          <h2>Billing Statement</h2>

          <div style={{ marginTop: '20px', marginLeft: '5px', padding: '20px', width: '723px', height: 'auto', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            {services.map((service, index) => (
              <div key={index}>
                <p>Service 1 - - - {service.name} - - - {service.price}</p>
                <p>Total Amount: {service.total}</p>
              </div>
            ))}
          </div>

          <br></br>
          <br></br>
          <h2>Charge Services </h2>
    

          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Housekeeping</td>
                <td>di ko rin alam</td>
                <td>Php0.00</td>
                <td>
                  <input
                    type="text"
                    value={quantityHousekeeping}
                    onChange={(e) => setQuantityHousekeeping(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Kitchen</td>
                <td>di ko alam</td>
                <td>Php123</td>
                <td>
                  <input
                    type="text"
                    value={quantityKitchen}
                    onChange={(e) => setQuantityKitchen(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>


          <button type="submit">
            Add to Bill
          </button>
        </form>
      </div>
    </div>

  );
};

export default ServicesManagementPage;
