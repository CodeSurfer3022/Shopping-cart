import React from "react";

function CartItemCard(props) {
  console.log(props)
    const cartItems = props.cartItems;
    const id = props.values.itemId;

    const itemIndex = cartItems.findIndex(cartItem => cartItem.itemId === id);
    console.log(itemIndex);
    const cartItem = cartItems[itemIndex];

    return(
        <div className="cart-card">
            <p>{props.values.item.name}</p>
            <p>Rs. {props.values.item.cost}</p>
            <div>
                <button onClick={() => props.updateCart(itemIndex, '-')}>-</button>
                <p>{cartItem.quantity}</p>
                <button onClick={() => props.updateCart(itemIndex, '+')}>+</button>
            </div>
            <p>Total is: {cartItem.quantity * props.values.item.cost}</p>
        </div>
    )
}

export default CartItemCard;
