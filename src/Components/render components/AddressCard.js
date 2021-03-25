import React from "react";
import {Link} from "react-router-dom";

function AddressCard(props) {
  let selection
  if(props.address.checked) {
    selection = (<div>
      <Link to="/payment">
        <button onClick={props.selectAddress}>Deliver to this address</button>
      </Link>
      <button>Edit address</button>
    </div>)
  }

  return (
    <div className="address">
      <input
        type="radio"
        name="address"
        value={props.address.address}
        checked={props.address.checked}
        onChange={() => props.handleChange(props.index)}
      />
      <p>{props.address.address}</p>
      {selection}
    </div>
  )
}

export default AddressCard;
