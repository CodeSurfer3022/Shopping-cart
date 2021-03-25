import React from "react";

function AddressSummary(props) {
  return(
    <div>
      <h3>Deliver to</h3>
      <p>{props.address}</p>
    </div>
  )
}

export default AddressSummary;
