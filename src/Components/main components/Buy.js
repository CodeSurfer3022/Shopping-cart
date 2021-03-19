import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import AddressCard from "../render components/AddressCard";

function Buy(props) {
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState('');

  const addressFormRef = useRef();

  const selectAddress = (event) => {
    event.preventDefault();
    const div = event.target.parentNode;
    const address = div.querySelector('.address').textContent;
    setAddress(address);
  }

  const addAddress = (event) => {
    event.preventDefault();
    const address = addressFormRef.current.address.value;

    setAddresses((prevAddress) => {
      let checked = prevAddress.length === 0;
      if(checked) setAddress(address);
      return [...prevAddress, {address, checked: checked}];
    });
  }

  const handleChange = (index) => {
    setAddresses(prevAddresses => {
      const newAddresses = prevAddresses.slice();
      newAddresses.forEach(address => address.checked = false);
      const address = newAddresses[index];
      address.checked = true;
      return newAddresses;
    })
  }

  const addressCards = addresses.map((address, index) =>
    <AddressCard
      key={index}
      index={index}
      address={address}
      selectAddress={selectAddress}
      handleChange={handleChange}
    />)

  return (
    <div>
      <Link to="/cart">
        <h2>Cancel</h2>
      </Link>
      <p>Select a delivery address</p>
      <div className="addresses">
        {addressCards}
      </div>
      <form name="addressForm" ref={addressFormRef}>
        <label>
          <input name="address" placeholder="Enter your address"/>
        </label>
        <button onClick={addAddress}>Add new address</button>
      </form>
    </div>
  )
}

export default Buy;
