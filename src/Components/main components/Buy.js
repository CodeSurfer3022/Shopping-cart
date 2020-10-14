import React from "react";
import BuyItemCard from "../render components/BuyItemCard";

function Buy(props) {
    const {cartItems} = props;

    const buyItemCards = cartItems.map(cartItem => <BuyItemCard
        key={cartItem.id}
        values={cartItem}
    />);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.clearCart();
    }

    const total = cartItems.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
    return(
        <div>
            <h2>Under construction</h2>
            {buyItemCards}
            <p>Total is {total}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Address
                    <input/>
                </label>
                <button>Confirm</button>
            </form>
        </div>
    )
}

export default Buy;