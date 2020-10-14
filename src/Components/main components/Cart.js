import React from "react";

function Cart(props) {
    const {cartItems} = props;
    if(Array.isArray(cartItems) && !cartItems.length) {
        return(
            <div>
                <h3>Cart is empty</h3>
            </div>
        )
    }
    return (
        <div>
            <h1>This is cart</h1>
            <div className="cartList">
                {cartItems}
            </div>
        </div>
    )
}

export default Cart;