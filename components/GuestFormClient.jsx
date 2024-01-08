// GuestFormClient.jsx
import React, { useState } from 'react';

const GuestFormClient = () => {
  const [guestCount, setGuestCount] = useState(1);

  const addGuest = () => {
    setGuestCount(prevCount => prevCount + 1);
  };

  const guestFields = [];
  for (let i = 1; i <= guestCount; i++) {
    guestFields.push(
      <div key={i}>
        {/* Render the guest details fields */}
        {/* ... (same code as before) ... */}
      </div>
    );
  }

  return (
    <form>
      {/* Primary guest details fields */}
      {/* ... (same code as before) ... */}

      {/* Add other guests button */}
      <button type="button" onClick={addGuest}>
        Add other guests
      </button>

      {/* Check-in button */}
      <button type="submit">Check-in</button>

      {/* Render dynamic guest fields */}
      {guestFields}
    </form>
  );
};

export default GuestFormClient;
