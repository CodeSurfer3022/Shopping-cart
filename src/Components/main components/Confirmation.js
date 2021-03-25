import React from "react";
import {Link} from "react-router-dom";

function Confirmation() {
  return(
    <div>
      <h1>Thanks for shopping with us!</h1>
      <p>Your order will be delivered in 2 seconds..</p>
      <Link to="/shop">
        <p>Continue shopping</p>
      </Link>
      <Link to="/home">
        <p>go to Home</p>
      </Link>
    </div>
  )
}

export default Confirmation;
