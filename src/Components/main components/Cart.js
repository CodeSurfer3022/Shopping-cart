import React from "react";
import CartItemCard from "../render components/CartItemCard";

function Cart(props) {
    const cartItemCards = props.cartItems.map(cartItem => <CartItemCard
        key = {cartItem.id}
        values={cartItem}
    />);
    return (
        <div>
            <h1>This is cart</h1>
            <div className="cartList">
                {cartItemCards}
            </div>
        </div>
    )
}

export default Cart;