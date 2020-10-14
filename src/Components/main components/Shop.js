import React from "react";

function Shop(props) {
    return(
        <div className="shop">
            <h1>this is shop</h1>
            <div>
                {props.items}
            </div>
        </div>
    )
}

export default Shop;