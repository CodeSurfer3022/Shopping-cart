import React from "react";

function AddressCard(props) {
  return(
    <div>
      <p className="address">{props.address}</p>
      <button onClick={props.selectAddress}>Select this address</button>
    </div>
  )
}

export default AddressCard;
