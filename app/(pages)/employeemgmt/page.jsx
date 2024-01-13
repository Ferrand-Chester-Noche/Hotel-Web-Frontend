import React from 'react';
import Link from 'next/link';
import NavbarAdmin from '@/components/navbaradmin';
import styles from '../../../styles/booking.css';

const EmployeeManagementPage = () => {
  return (
    <div>
      <NavbarAdmin />
      <div style={{ marginLeft: '50px', marginTop: '4px', zIndex: '-1' }}>

        <div className="Title"
          style={{ width: 'auto', height: 92, color: '#8A596B', fontSize: 85, fontFamily: 'Inter', fontWeight: '700' }}>
          Manage Payroll
        </div>

        <br></br>
        <br></br>



        <table >
          <thead>
            <tr>
              <th >EmployeeID</th>
              <th >Employee Name</th>
              <th >Employee Type</th>
              <th >Action</th>
              <th >Payroll</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >1</td>
              <td >John Doe</td>
              <td >Housekeeper</td>
              <td >
                <Link href="http://localhost:3000/employeemgmt/empDeets">
                  <button >View Details</button>
                </Link>
              </td>
              <th >0</th>
            </tr>
            <tr>
              <td >2</td>
              <td >Jane Doe</td>
              <td >Concierge</td>
              <td >
                <Link href="http://localhost:3000/employeemgmt/empDeets">
                  <button style={{ alignItems: 'center' }}>View Details</button>
                </Link>
              </td>
              <th >0</th>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
          <tfoot>
            <tr>
              <th ></th>
              <th ></th>
              <th ></th>
              <th ></th>
              <th >Total: 0</th>
            </tr>
          </tfoot>
        </table>
        <br></br>
        <button>Submit Payroll</button>
      </div>
    </div>


  );
};

export default EmployeeManagementPage;
