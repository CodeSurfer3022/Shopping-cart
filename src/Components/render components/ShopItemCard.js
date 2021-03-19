import React from "react";

function ShopItemCard(props) {
  const cartItems = props.cartItems;
  const id = props.values.id;

  const itemIndex = cartItems.findIndex(cartItem => cartItem.id === id);
  console.log(itemIndex);

  console.log(id, cartItems);
  if (itemIndex >= 0) {
    const cartItem = cartItems[itemIndex];
    return (
      <div>
        <div className="shop-card">
          <p>{props.values.name}</p>
          <p>{props.values.price}</p>
          <div>
            <button onClick={() => props.updateCart(itemIndex, '-')}>-</button>
            <p>{cartItem.quantity}</p>
            <button onClick={() => props.updateCart(itemIndex, '+')}>+</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="shop-card">
      <p>{props.values.name}</p>
      <p>{props.values.price}</p>
      <button onClick={() => props.addToCart(id)}>Add to cart</button>
    </div>
  )
}

export default ShopItemCard;
