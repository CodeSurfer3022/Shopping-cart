import React from "react";
import {Link} from "react-router-dom";
import ShopItemCard from "../render components/ShopItemCard";

function Shop(props) {
  const {cartItems, shopItems} = props;

  console.log(shopItems, cartItems);
  const shopItemCards = shopItems.map(shopItem => <ShopItemCard
    key={shopItem.itemId}
    id={shopItem.itemId}
    values={shopItem.item}
    cartItems={cartItems}
    updateCart={props.updateCart}
    addToCart={props.addToCart}
  />);

  if (Array.isArray(cartItems) && cartItems.length) {
    return (
      <div className="shop">
        <Link to="/cart">
          <button>Go to cart</button>
        </Link>
        <Link to="/buy">
          <button>Proceed to buy</button>
        </Link>
        <h1>this is shop</h1>
        <div>
          {shopItemCards}
        </div>
      </div>
    )
  }
  return (
    <div className="shop">
      <h1>this is shop</h1>
      <div>
        {shopItemCards}
      </div>
    </div>
  )

}

export default Shop;
