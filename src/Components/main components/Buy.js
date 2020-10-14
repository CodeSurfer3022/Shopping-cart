import React from "react";
import BuyItemCard from "../render components/BuyItemCard";

function Buy(props) {
    const {cartItems} = props;

    const buyItemCards = cartItems.map(cartItem => <BuyItemCard
        key={cartItem.id}
        values={cartItem}
    />);

    const total = cartItems.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
    return(
        <div>
            {buyItemCards}
            <p>Total is {total}</p>
        </div>
    )
}

export default Buy;