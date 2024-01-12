// EmployeeDetails.jsx

import React from 'react';
import NavbarFront from '@/components/navbarfront';
import Link from 'next/link';

const EmployeeDetails = () => {
  const employees = [
    {
      name: 'John Doe',
      position: 'Developer',
      department: 'Engineering',
      contactNumber: '+1234567890',
      emailAddress: 'john.doe@example.com',
    },
    // Add more employee objects as needed
  ];

  return (
    <div>
      <NavbarFront />
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
