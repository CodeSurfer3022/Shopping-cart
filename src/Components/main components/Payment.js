import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import PaymentCard from "../render components/PaymentCard";

function Payment(props) {
  const [payments, setPayments] = useState([]);
  const [payment, setPayment] = useState('');

  const paymentsFormRef = useRef();

  const selectPayment = (event) => {
    event.preventDefault();
    const div = event.target.parentNode;
    const payment = div.querySelector('.payment').textContent;
    setPayment(payment);
  }

  const addPayment = (event) => {
    event.preventDefault();
    const payment = paymentsFormRef.current.payment.value;

    console.log(payment)
    setPayments((prevPayment) => {
      let checked = prevPayment.length === 0;
      if(checked) setPayment(payment);
      return [...prevPayment, {payment, checked: checked}];
    });
  }

  const handleChange = (index) => {
    setPayments(prevPayments => {
      const newPayments = prevPayments.slice();
      newPayments.forEach(payment => payment.checked = false);
      const payment = newPayments[index];
      payment.checked = true;
      return newPayments;
    })
  }

  const paymentCards = payments.map((payment, index) =>
    <PaymentCard
      key={index}
      index={index}
      payment={payment}
      selectPayment={selectPayment}
      handleChange={handleChange}
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
      <form name="paymentsForm" ref={paymentsFormRef}>
        <label>
          <input name="payment" placeholder="Enter your Payment"/>
        </label>
        <button onClick={addPayment}>Add new Payment</button>
      </form>
    </div>
  )
}

export default Payment;
