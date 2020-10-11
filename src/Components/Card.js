import React from "react";

function Card(props) {
    return(
        <div className="card">
            <p>{props.values.name}</p>
            <p>{props.values.price}</p>
        </div>
    )
}

export default Card;