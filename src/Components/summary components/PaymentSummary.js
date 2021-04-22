import React from "react";
import './PaymentSummary.css';

function PaymentSummary(props) {
  return(
    <div className="paymentSummary">
      <h2>Pay with</h2>
      <p>{props.payment}</p>
    </div>
  )
}

export default PaymentSummary;
