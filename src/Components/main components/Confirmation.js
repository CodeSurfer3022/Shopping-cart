import React from "react";
import {Link} from "react-router-dom";
import './Confirmation.css';

function Confirmation() {
  return(
    <div className="confirmation">
      <h1>Thanks for shopping with us!</h1>
      <p>Your order will be delivered in 2 seconds..</p>
      <Link to="/shop">
        <button>Continue shopping</button>
      </Link>
      <Link to="/">
        <button>go to Home</button>
      </Link>
    </div>
  )
}

export default Confirmation;
