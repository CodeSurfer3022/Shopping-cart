import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./Components/additional components/Header";
import Footer from "./Components/additional components/Footer";
import Home from "./Components/main components/Home";
import Shop from "./Components/main components/Shop";
import Cart from "./Components/main components/Cart";
import ShopItemCard from "./Components/render components/ShopItemCard";
import shopItems from './ShopItems.json';

function App() {
    const [shopItemsArray, setShopItems] = useState(shopItems);
    const[cartItemsArray, setCartItems] = useState([]);

    const addToCart = (id) => {
        const shopItem = shopItemsArray[id - 1];
        shopItem.quantity = 1;
        setCartItems([...cartItemsArray, shopItem]);
    }

    const updateCart = (index, op) => {
        console.log('in update');
        const cartItems = cartItemsArray.slice();
        const cartItem = cartItems[index];

        const quantity = op === '+' ? cartItem.quantity + 1 : cartItem.quantity - 1;

        // delete item from cartItems if quantity is 0.
        if(quantity === 0) cartItems.splice(index, 1);
        else cartItem.quantity = quantity;

        setCartItems(cartItems);
    }

    const shopItemCards = shopItemsArray.map(shopItem => <ShopItemCard
        key = {shopItem.id}
        values={shopItem}
        cartItems={cartItemsArray}
        updateCart={updateCart}
        addToCart={addToCart}
    />);

    const cartCount = cartItemsArray.length;

    return (
        <>
            <Router>
                <Header cartCount={cartCount}/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop">
                        <Shop items={shopItemCards}/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart cartItems={cartItemsArray}/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
