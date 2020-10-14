import React from "react";
import {Link} from "react-router-dom";

function Cart(props) {
    const {cartItems, cartItemCards} = props;
    const total = cartItems.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)

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
                {cartItemCards}
            </div>
            <p>Grand total is {total}</p>
            <Link to="buy"><button>Proceed to Buy</button></Link>
        </div>
    )
}

export default Cart;