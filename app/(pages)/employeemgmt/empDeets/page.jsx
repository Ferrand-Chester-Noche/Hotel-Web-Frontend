'use client';
import React, { useState } from 'react';
import NavbarAdmin from '@/components/navbaradmin';
import Link from 'next/link';

const EmployeeDetails = () => {
  const [payroll, setPayroll] = useState(''); // State for handling input value

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

  // Function to handle input changes and update the state
  const handlePayrollChange = (e) => {
    setPayroll(e.target.value);
  };

  // Function to log the input value to the console
  const logPayroll = () => {
    console.log('Payroll:', payroll);
  };

  return (
    <div>
      <NavbarAdmin />

      <div>
        <div style={{ marginTop: '40px', marginLeft: '40px', padding: '20px', width: '300px', height: 'auto', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          {employees.map((employee, index) => (
            <div key={index}>
              <h2>Employee {index + 1} Details</h2>
              <p>
                Payroll:
                <input
                  type="text"
                  value={payroll}
                  onChange={handlePayrollChange}
                />
                <button onClick={logPayroll}>Log Payroll</button>
              </p>
              <p>Name: {employee.name}</p>
              <p>Position: {employee.position}</p>
              <p>Department: {employee.department}</p>
              <p>Contact Number: {employee.contactNumber}</p>
              <p>Email Address: {employee.emailAddress}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
