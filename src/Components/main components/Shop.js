import React from "react";
import {Link} from "react-router-dom";

function Shop(props) {
    const {cartItems, shopItems} = props;
    if (Array.isArray(cartItems) && cartItems.length) {
        return(
            <div className="shop">
                <h1>this is shop</h1>
                <div>
                    {shopItems}
                </div>
                <Link to="/cart"><button>Go to cart</button></Link>
                <Link to="/buy"><button>Proceed to buy</button></Link>
            </div>
        )
    }
    return (
        <div className="shop">
            <h1>this is shop</h1>
            <div>
                {shopItems}
            </div>
        </div>
    )

}

export default Shop;