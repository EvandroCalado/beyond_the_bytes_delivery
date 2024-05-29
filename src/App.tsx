import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AddressList, EditAddress, RegisterAddress } from 'components';

interface Address {
  lot: string;
  details: string;
}

const App = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  const addAddress = (address: Address) => {
    setAddresses([...addresses, address]);
  };

  const updateAddress = (index: number, updatedAddress: Address) => {
    const newAddresses = addresses.map((addr, i) =>
      i === index ? updatedAddress : addr,
    );
    setAddresses(newAddresses);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddressList addresses={addresses} />} />
        <Route
          path="/register-address"
          element={<RegisterAddress addAddress={addAddress} />}
        />
        <Route
          path="/edit-address/:id"
          element={
            <EditAddress addresses={addresses} updateAddress={updateAddress} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
