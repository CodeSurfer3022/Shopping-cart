import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import shopItems from './ShopItems.json';

import Header from "./Components/additional components/Header";
import Footer from "./Components/additional components/Footer";

import Home from "./Components/main components/Home";
import Shop from "./Components/main components/Shop";
import Cart from "./Components/main components/Cart";
import Buy from "./Components/main components/Buy";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const shopItem = shopItems[id - 1];
    shopItem.quantity = 1;
    setCartItems([...cartItems, shopItem]);
  }

  const updateCart = (index, op) => {
    console.log('in update');
    const newCartItems = cartItems.slice();
    const newCartItem = newCartItems[index];

    const quantity = op === '+' ? newCartItem.quantity + 1 : newCartItem.quantity - 1;

    // delete item from cartItems if quantity is 0.
    if (quantity === 0) newCartItems.splice(index, 1);
    else newCartItem.quantity = quantity;

    setCartItems(newCartItems);
  }

  const clearCart = () => {
    console.log('in the clear');
    setCartItems([]);
  }

  const cartCount = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <Router>
      <Header cartCount={cartCount}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/shop">
          <Shop
            shopItems={shopItems}
            cartItems={cartItems}
            addToCart={addToCart}
            updateCart={updateCart}
          />
        </Route>
        <Route path="/cart">
          <Cart
            cartItems={cartItems}
            updateCart={updateCart}
          />
        </Route>
        <Route path="/buy">
          <Buy
            cartItems={cartItems}
            clearCart={clearCart}
          />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
