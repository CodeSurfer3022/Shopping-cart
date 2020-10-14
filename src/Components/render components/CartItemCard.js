import React from "react";

function CartItemCard(props) {
    return(
        <div className="cart-card">
            <p>{props.values.name}</p>
            <p>{props.values.price}</p>
            <p>{props.values.quantity}</p>
        </div>
    )
}

export default CartItemCard;