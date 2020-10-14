import React from "react";

function BuyItemCard(props) {
    const total = props.values.quantity * props.values.price;
    return(
        <div>
            <p>{props.values.name}</p>
            <p>{props.values.price}</p>
            <p>{props.values.quantity}</p>
            <h4>{total}</h4>
        </div>
    )
}

export default BuyItemCard;