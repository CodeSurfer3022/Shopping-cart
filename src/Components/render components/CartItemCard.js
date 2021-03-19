import React from "react";

function CartItemCard(props) {
    const cartItems = props.cartItems;
    const id = props.values.id;

    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === id);
    console.log(itemIndex);
    const cartItem = cartItems[itemIndex];

    return(
        <div className="cart-card">
            <p>{props.values.name}</p>
            <p>{props.values.price}</p>
            <div>r
                <button onClick={() => props.updateCart(itemIndex, '-')}>-</button>
                <p>{cartItem.quantity}</p>
                <button onClick={() => props.updateCart(itemIndex, '+')}>+</button>
            </div>
            <p>Total is: {cartItem.quantity * props.values.price}</p>
        </div>
    )
}

export default CartItemCard;
