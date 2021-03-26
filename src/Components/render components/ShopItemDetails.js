import React, {useState, useEffect} from "react";

function ShopItemDetails(props) {
  console.log(props)
  const [item ,setItem] = useState();
  useEffect(() => {
    fetchItem();

  }, [])

  const cartItems = props.cartItems;
  const id = props.match.params.id;

  const itemIndex = cartItems.findIndex(cartItem => cartItem.id === id);
  const cartItem = cartItems[itemIndex];

  const quantityComponent = itemIndex >= 0 ?  <div>
    <button onClick={() => props.updateCart(itemIndex, '-')}>-</button>
    <p>{cartItem.quantity}</p>
    <button onClick={() => props.updateCart(itemIndex, '+')}>+</button>
  </div> : <button onClick={() => props.addToCart(id)}>Add to cart</button>;



  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`);
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
  return(
    <div>
      <h1>{item.item.name}</h1>
      <img src={item.item.images.icon} alt={item.name}/>
    </div>
  )
}

export default ShopItemDetails;
