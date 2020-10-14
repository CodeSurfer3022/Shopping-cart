import React from "react";

function Cart(props) {

    return (
        <div>
            <h1>This is cart</h1>
            <div className="cartList">
                {props.cartItems}
            </div>
        </div>
    )
}

export default Cart;