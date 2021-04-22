import React from "react";
import {Link} from "react-router-dom";
import './AddressCard.css';

function AddressCard(props) {
  let selection;
  if(props.address.checked) {
    selection = (<div>
      <Link to="/payment">
        <button onClick={props.selectAddress}>Deliver to this address</button>
      </Link>
    </div>)
  }

  return (
    <div className="addressCard">
      <div className="address">
        <input
          type="radio"
          name="address"
          value={props.address.address}
          checked={props.address.checked}
          onChange={() => props.handleChange(props.index)}
        />
        <p>{props.address.address}</p>
        <i className="fas fa-edit"></i>
      </div>
      {selection}
    </div>
  )
}

export default AddressCard;
