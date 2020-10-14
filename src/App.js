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
        setCartItems([...cartItemsArray, shopItem]);
    }

    const shopItemCards = shopItemsArray.map(shopItem => <ShopItemCard
        key = {shopItem.id}
        values={shopItem}
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
