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
           <th style={{ border: '1px solid black' }}>EmployeeID</th>
            <th style={{ border: '1px solid black' }}>Employee Name</th>
            <th style={{ border: '1px solid black' }}>Employee Type</th>
            <th style={{ border: '1px solid black' }}>Action</th>
            <th style={{ border: '1px solid black' }}>Payroll</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ border: '1px solid black' }}>1</th>
            <td style={{ border: '1px solid black' }}>John Doe</td>
            <td style={{ border: '1px solid black' }}>Housekeeper</td>
            <td style={{ border: '1px solid black' }}>
              <Link href="http://localhost:3000/employeemgmt/empDeets">
                <button style={{ cursor: 'pointer' }}>Edit</button>
              </Link>
            </td>
            <th style={{ border: '1px solid black' }}>0</th>
          </tr>
          <tr>
            <th style={{ border: '1px solid black' }}>2</th>
            <td style={{ border: '1px solid black' }}>Jane Doe</td>
            <td style={{ border: '1px solid black' }}>Concierge</td>
            <td style={{ border: '1px solid black' }}>
              <Link href="http://localhost:3000/employeemgmt/empDeets">
                <button style={{ cursor: 'pointer' }}>Edit</button>
              </Link>
            </td>
            <th style={{ border: '1px solid black' }}>0</th>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
        <tfoot>
          <tr>
           <th style={{ border: '1px solid black' }}></th>
            <th style={{ border: '1px solid black' }}></th>
            <th style={{ border: '1px solid black' }}></th>
            <th style={{ border: '1px solid black' }}></th>
            <th style={{ border: '1px solid black' }}>Total: 0</th>
          </tr>
        </tfoot>
      </table>
      <button>Submit Payroll</button>
    </div>
  );
};

export default EmployeeManagementPage;
