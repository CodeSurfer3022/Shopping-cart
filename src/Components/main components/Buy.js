import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import AddressCard from "../render components/AddressCard";

function Buy(props) {
  const [addresses, setAddress] = useState([]);
  const addressFormRef = useRef();

  const addressCards = addresses.map((address, index) =>
    <AddressCard key={index} address={address}/>)

  const handleSubmit = (event) => {
    event.preventDefault();
    const address = addressFormRef.current.address.value;
    setAddress((prevAddress) => {
      return [...prevAddress, address];
    });
    // props.clearCart();
  }

  return (
    <div>
      <Link to="/cart">
        <h2>Cancel</h2>
      </Link>
      <form onSubmit={handleSubmit} name="addressForm" ref={addressFormRef}>
        <p>Select a delivery address</p>
        {addressCards}
        <label>
          <input name="address" placeholder="Enter your address"/>
        </label>
        <button>Add new address</button>
        <button>Confirm</button>
      </form>
    </div>
  )
}

export default Buy;
