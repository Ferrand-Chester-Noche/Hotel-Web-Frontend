// servicesmgmt/page.jsx

// Import necessary modules
'use client';
import React from 'react';
import NavbarAdmin from '@/components/navbaradmin';
import styles from '../../../styles/booking.css'; // Import your CSS file

// Functional component for Services Management Page
const ServicesManagementPage = () => {
  // Array to store service details
  const services = [
    { name: 'Housekeeping', description: 'Cleaning and maintenance of the room', price: 0 },
    { name: 'Massage/Spa', description: 'Relaxing massage and spa treatment', price: 1500 },
    { name: 'Laundry', description: 'Laundry service for clothing', price: 1000 },
    { name: 'Room Service', description: 'In-room dining service', price: 2000 },
    { name: 'Transportation', description: 'Private transportation service', price: 5500 },
    { name: 'Guided Tour', description: 'Guided tour of local attractions', price: 10000 },
    { name: 'Shoe Shining', description: 'Premium shoe shining service', price: 30000 },
  ];

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get the Booking Reference Number value
    const bookingReferenceNumber = event.target.querySelector('input[type="text"]').value;
    console.log('Booking Reference Number:', bookingReferenceNumber);

    // Get the values of Charge Services and their quantities
    const chargeServices = services.map((service, index) => {
      const serviceName = service.name;
      const quantity = event.target.querySelector(`input[data-service="${index}"]`).value;
      console.log(`Service: ${serviceName}, Quantity: ${quantity}`);
      return { serviceName, quantity };
    });
  };

  return (
    <div>
      {/* Navbar for the admin page */}
      <NavbarAdmin />

      <div style={{ marginLeft: '40px' }}>
        {/* Title for the page */}
        <div className="Title" style={{ width: 'auto', height: 92, color: '#8A596B', fontSize: 85, fontFamily: 'Inter', fontWeight: '700' }}>
          Manage Services
        </div>
        <br></br>
        <br></br>
        {/* Line separator */}
        <div className="Line1" style={{ width: '3/4', height: 0, border: '1px #D3D3D3 solid', position: 'relative', top: '70px' }} />

        {/* Form for Booking Reference Number, Billing Statement, and Charge Services */}
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Booking Reference Number
              <input type="text" style={{ width: '500px', marginLeft: '20px' }} />
            </label>
          </div>
          <br></br>
          <br></br>

          <h2>Billing Statement</h2>

          <div style={{ marginTop: '20px', marginLeft: '5px', padding: '20px', width: '723px', height: 'auto', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            {/* Table for Billing Statement */}
            <table>
              <thead>
                <tr>
                  <th>Service Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index}>
                    <td>{service.name}</td>
                    <td>{service.description}</td>
                    <td>Php {service.price}</td>
                    <td>{/* You can calculate the total amount here if needed */}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <br></br>
          <br></br>
          <h2>Charge Services </h2>

          {/* Table for Charge Services */}
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
              {services.map((service, index) => (
                <tr key={index}>
                  <td>{service.name}</td>
                  <td>{service.description}</td>
                  <td>Php {service.price}</td>
                  <td><input type="text" data-service={index} /></td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Button to submit the form */}
          <button type="submit">
            Add to Bill
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the component as the default export
export default ServicesManagementPage;
