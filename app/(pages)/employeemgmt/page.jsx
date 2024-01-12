import React from 'react';
import Link from 'next/link';
import NavbarAdmin from '@/components/navbaradmin';
import styles from '../../../styles/booking.css';

const EmployeeManagementPage = () => {
  return (
    <div>
      <NavbarAdmin />
      <div style={{ marginLeft: '50px', marginTop: '50px', zIndex: '-1' }}>

<div className="Title" 
  style={{ width: 1000, height: 92, color: '#8A596B', fontSize: 50, fontFamily: 'Inter', fontWeight: '700'}}>
  Manage Employee Payroll
</div>



      <table border="1" style={{ borderCollapse: 'collapse', width: '80%' }}>
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
                <button p style={{ cursor: 'pointer' }}>Edit</button>
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
    </div>

    
  );
};

export default EmployeeManagementPage;
