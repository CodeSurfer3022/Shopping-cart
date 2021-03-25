import React from "react";
import {Link} from "react-router-dom";
import AddressCard from "../render components/AddressCard";

function Buy(props) {
  const addressCards = props.addresses.map((address, index) =>
    <AddressCard
      key={index}
      index={index}
      address={address}
      selectAddress={props.selectAddress}
      handleChange={props.handleChange}
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
      <form name="addressForm">
        <label>
          <input name="address" placeholder="Enter your address"/>
        </label>
        <button onClick={props.addAddress}>Add new address</button>
      </form>
    </div>
  )
}

export default Buy;
