import React, {useState, useEffect} from "react";

function ShopItemDetails({match}) {
  const [item ,setItem] = useState();

  useEffect(() => {
    fetchItem();

  }, [])

  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
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
