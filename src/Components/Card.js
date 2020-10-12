import React from "react";

function Card(props) {
    return(
        <div className="card">
            <p>{props.values.name}</p>
            <p>{props.values.price}</p>
            <button onClick={() => props.addToCart(props.values.id, )}>Add to cart</button>
        </div>
    )
}

export default Card;