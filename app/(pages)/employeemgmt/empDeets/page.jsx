// EmployeeDetails.jsx

import React from 'react';
import NavbarAdmin from '@/components/navbaradmin';
import Link from 'next/link';

const EmployeeDetails = () => {
  const employees = [
    {
      name: 'John Doe',
      position: 'Housekeeper',
      department: '-',
      contactNumber: '+1234567890',
      emailAddress: 'john.doe@example.com',
    },
    // Add more employee objects as needed
  ];

  return (
    <div>
      <NavbarAdmin />
      <div>
        <div>
          {employees.map((employee, index) => (
            <div>
              <h2>Employee {index + 1} Details</h2>
              <p>Name: {employee.name}</p>
              <p>Position: {employee.position}</p>
              <p>Department: {employee.department}</p>
              <p>Contact Number: {employee.contactNumber}</p>
              <p>Email Address: {employee.emailAddress}</p>
              <div>
                <button>Edit</button>
              </div>
              <div>
              <Link href="http://localhost:3000/employeemgmt">
                 <button>back</button>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
