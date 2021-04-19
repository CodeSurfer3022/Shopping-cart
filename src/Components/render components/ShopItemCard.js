import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './shopItemCard.css';

function ShopItemCard(props) {
  const [item ,setItem] = useState();
  useEffect(() => {
    fetchItem();
  }, [])

  const cartItems = props.cartItems;
  const id = props.id;

  const itemIndex = cartItems.findIndex(cartItem => cartItem.itemId === id);
  const cartItem = cartItems[itemIndex];

  const quantityComponent = itemIndex >= 0 ?  <div className="changeQuantity">
    <button onClick={() => props.updateCart(itemIndex, '-')}>-</button>
    <p>{cartItem.quantity}</p>
    <button onClick={() => props.updateCart(itemIndex, '+')}>+</button>
  </div> : <button onClick={() => props.addToCart(id)}>Add to cart</button>;

  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`, {mode: 'cors'});
    const response = await data.json();
    const item = response.data;

    console.log(item);
    setItem(item);
  }

  if(!item) {
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="shop-card">
      <div className="heading">
        <Link to={`shop/${id}`} className="itemName">
          <h3>{props.values.name}</h3>
        </Link>
      </div>
      <div className="shopItemImage">
        <img src={item.item.images.icon} alt={item.name}/>
      </div>
      <p className="rarity">{item.item.rarity}</p>
      <div className="ratings">
        <p>{item.item.ratings.avgStars}</p>
        <p>{item.item.ratings.numberVotes} ratings</p>
      </div>
      <div className="price">
        <p>${props.values.cost}</p>
        {quantityComponent}
      </div>
    </div>
  )
}

export default ShopItemCard;
