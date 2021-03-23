import React from "react";
import {Link} from "react-router-dom";
import OrderSummary from "../summary components/OrderSummary";
import PaymentSummary from "../summary components/PaymentSummary";

function PlaceOrder() {
  return (
    <div>
      <Link to="/payment">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <h2>Place your order</h2>
      <OrderSummary />
      <PaymentSummary />
      <div className="addressSummary">
      </div>
      <div className="ItemsSummary">
      </div>

      <Link to="/cart">
        <p>Cancel and go to cart</p>
      </Link>
      <button>Place order and pay</button>
    </div>
  )
}

export default PlaceOrder;
