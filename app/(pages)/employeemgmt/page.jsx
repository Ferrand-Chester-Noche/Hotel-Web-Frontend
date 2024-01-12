import React from 'react';
import Link from 'next/link';
import NavbarFront from '@/components/navbarfront';

const EmployeeManagementPage = () => {
  return (
    <div>
      <NavbarFront />
      <h2>Employee Management</h2>
      <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>Name</th>
            <th style={{ border: '1px solid black' }}>Occupation</th>
            <th style={{ border: '1px solid black' }}>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black' }}>John Doe</td>
            <td style={{ border: '1px solid black' }}>Developer</td>
            <td style={{ border: '1px solid black' }}>
              <Link href="http://localhost:3000/employeemgmt/empDeets">
                <button style={{ cursor: 'pointer' }}>Edit</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}>Jane Doe</td>
            <td style={{ border: '1px solid black' }}>Concierge</td>
            <td style={{ border: '1px solid black' }}>
              <Link href="http://localhost:3000/employeemgmt/empDeets">
                <button style={{ cursor: 'pointer' }}>Edit</button>
              </Link>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagementPage;
