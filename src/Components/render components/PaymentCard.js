import React from "react";
import {Link} from "react-router-dom";
import './PaymentCard.css';

function PaymentCard(props) {
  let selection
  if (props.payment.checked) {
    selection = (<div>
      <Link to="/placeorder">
        <button>Pay</button>
      </Link>
    </div>)
  }

  return (
    <div className="paymentCard">
      <div className="payment">
        <input
          type="radio"
          name="payment"
          value={props.payment.payment}
          checked={props.payment.checked}
          onChange={() => props.handleChange(props.index)}
        />
        <p>{props.payment.payment}</p>
        <i className="fas fa-edit"></i>
      </div>
      {selection}
    </div>
  )
}

export default PaymentCard;
