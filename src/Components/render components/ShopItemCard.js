import React from "react";
import {Link} from "react-router-dom";

function ShopItemCard(props) {
  const cartItems = props.cartItems;
  const id = props.id;

  const itemIndex = cartItems.findIndex(cartItem => cartItem.id === id);
  const cartItem = cartItems[itemIndex];

  const quantityComponent = itemIndex >= 0 ?  <div>
    <button onClick={() => props.updateCart(itemIndex, '-')}>-</button>
    <p>{cartItem.quantity}</p>
    <button onClick={() => props.updateCart(itemIndex, '+')}>+</button>
  </div> : <button onClick={() => props.addToCart(id)}>Add to cart</button>;

  return (
    <div className="shop-card">
      <Link to={`shop/${id}`}>
        <p>{props.values.name}</p>
      </Link>
      <p>{props.values.cost}</p>
      {quantityComponent}
    </div>
  )
}

export default ShopItemCard;
