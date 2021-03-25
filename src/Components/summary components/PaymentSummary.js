import React from "react";

function PaymentSummary(props) {
  return(
    <div>
      <h2>Pay with</h2>
      <p>{props.payment}</p>
    </div>
  )
}

export default PaymentSummary;
