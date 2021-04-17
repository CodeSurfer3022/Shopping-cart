import React from "react";
import {Link} from "react-router-dom";
import ShopItemCard from "../render components/ShopItemCard";
import './Shop.css';

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

  const links = Array.isArray(cartItems) && cartItems.length ?
  <div className="shopLinks">
    <Link to="/cart">
      <button>Go to cart</button>
    </Link>
    <Link to="/buy">
      <button>Proceed to buy</button>
    </Link>
  </div> : null

  return (
    <div className="shop">
      {links}
      <div className="shopList">
        {shopItemCards}
      </div>
    </div>
  )

}

export default Shop;
