import React, {useState} from "react";
import items from '../Items.json'
import Card from "./Card";

// export const cartContext = React.createContext();

function Shop() {
    const[itemsArray, updateItems] = useState(items);
    const[cartItems, updateCartItems] = useState([]);

    const updateCart = (item) => {
        console.log(item);
        cartItems.push(item);
    }

    const addToCart = (id) => {
        console.log(id);
        const item = itemsArray[id - 1];
        updateCart(item);
    }

    const itemCards = itemsArray.map(item => <Card
        key={item.id}
        values={item}
        addToCart={addToCart}
    />)

    return(
        <div>
            <h1>this is shop</h1>
            <div className="items">
                {itemCards}
            </div>
        </div>
    )
}

export default Shop;