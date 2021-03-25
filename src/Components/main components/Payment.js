import React from "react";
import {Link} from "react-router-dom";
import PaymentCard from "../render components/PaymentCard";

function Payment(props) {
  const paymentCards = props.payments.map((payment, index) =>
    <PaymentCard
      key={index}
      index={index}
      payment={payment}
      selectPayment={props.selectPayment}
      handleChange={props.handleChange}
    />)

  return (
    <div>
      <Link to="/buy">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <h1>Pay {props.total}</h1>
      <h2>Select a payment method</h2>
      <div className="payments">
        {paymentCards}
      </div>
      <form name="paymentsForm">
        <label>
          <input name="payment" placeholder="Enter your Payment"/>
        </label>
        <button onClick={props.addPayment}>Add new Payment</button>
      </form>

    </div>
  )
}

export default Payment;
