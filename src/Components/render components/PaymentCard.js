import React from "react";
import {Link} from "react-router-dom";

function PaymentCard(props) {
  let selection
  if (props.payment.checked) {
    selection = (<div>
      <Link to="/payment">
        <button>Pay</button>
      </Link>
      <button>Edit payment details</button>
    </div>)
  }

  return (
    <div>
      <input
        type="radio"
        name="payment"
        value={props.payment.payment}
        checked={props.payment.checked}
        onChange={() => props.handleChange(props.index)}
      />
      <p className="payment">{props.payment.payment}</p>
      {selection}
    </div>
  )
}

export default PaymentCard;
