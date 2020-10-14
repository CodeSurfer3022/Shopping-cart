import React from "react";

function Shop(props) {
    const {shopItems} = props;
    return(
        <div className="shop">
            <h1>this is shop</h1>
            <div>
                {shopItems}
            </div>
        </div>
    )
}

export default Shop;