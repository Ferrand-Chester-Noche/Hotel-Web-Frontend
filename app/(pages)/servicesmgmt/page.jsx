import React from 'react';
import NavbarAdmin from '@/components/navbaradmin';
import styles from '../../../styles/booking.css'; // Import your CSS file

const ServicesManagementPage = () => {
  return (
    <div>
      <NavbarAdmin />
      <div>
        <form className={styles['booking-history-form']}>
          <label>
            Enter BRN:
            <input type="text" />
          </label>
          <br />
        </form>

        <div>
          <p>Billing Statement:</p>
          <p>Total amount: Php##.##</p>
          <p>Charges:</p>
          <ul>
            <li>Service 1 - - - Php##.##</li>
            <li>Service 2 - - - Php##.##</li>
            <li>Service 3 - - - Php##.##</li>
          </ul>
        </div>

        <div>
          <p>Charge Services:</p>
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
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>Kitchen</td>
                <td>di ko alam</td>
                <td>Php123</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className={styles['static-button']}>Add to Bill</button>
      </div>
    </div>
  );
};

export default ServicesManagementPage;
