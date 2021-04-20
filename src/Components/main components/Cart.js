import React from "react";
import {Link} from "react-router-dom";
import CartItemCard from "../render components/CartItemCard";
import './Cart.css'

function Cart(props) {

  const {cartItems} = props;

  const cartItemCards = cartItems.map(cartItem => <CartItemCard
    key={cartItem.itemId}
    values={cartItem}
    cartItems={cartItems}
    updateCart={props.updateCart}
  />);

  if (Array.isArray(cartItems) && !cartItems.length) {
    return (
      <div className="cart">
        <h3>Cart is empty</h3>
      </div>
    )
  }
  return (
    <div className="cart">
      <div className="cartList">
        {cartItemCards}
      </div>
      <p>Grand total is {props.total}</p>

      <Link to="buy">
        <button>Proceed to Buy</button>
      </Link>
    </div>
  )
}

export default Cart;
