import React, {useState} from "react";
import items from '../Items.json'
import Card from "./Card";

function Shop() {
    const[itemsArray, updateItems] = useState(items);

    const itemCards = itemsArray.map(item => <Card
        key={item.id}
        values={item}
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