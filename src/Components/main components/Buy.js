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
      return [...prevAddress, address];
    });
  }

  const addressCards = addresses.map((address, index) =>
    <AddressCard
      key={index}
      index={index}
      address={address}
      selectAddress={selectAddress}
    />)

  return (
    <div>
      <Link to="/cart">
        <h2>Cancel</h2>
      </Link>
      <form name="addressForm" ref={addressFormRef}>
        <p>Select a delivery address</p>
        {addressCards}
        <label>
          <input name="address" placeholder="Enter your address"/>
        </label>
        <button onClick={addAddress}>Add new address</button>
      </form>
    </div>
  )
}

export default Buy;
