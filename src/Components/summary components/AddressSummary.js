import React from "react";
import './AddressSummary.css';

function AddressSummary(props) {
  return(
    <div className="addressSummary">
      <h3>Deliver to</h3>
      <p>{props.address}</p>
    </div>
  )
}

export default AddressSummary;
