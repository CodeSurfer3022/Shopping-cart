import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from "./Components/additional components/Header";
import Footer from "./Components/additional components/Footer";

import Home from "./Components/main components/Home";
import Shop from "./Components/main components/Shop";
import Cart from "./Components/main components/Cart";
import Buy from "./Components/main components/Buy";
import Payment from "./Components/main components/Payment";
import PlaceOrder from "./Components/main components/PlaceOrder";
import Confirmation from "./Components/main components/Confirmation";

function App() {
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      fetchItems();
  }, [])

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/items/list');
    const response = await data.json();
    const items = response.data.slice(0,100);
    console.log(items);
    setShopItems(items)

  }

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
  const total = cartItems.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)

  const [addresses, setAddresses] = useState([{address: 'Home', checked: true}]);
  const [deliveryAddress, setDeliveryAddress] = useState('Home');

  const selectDeliveryAddress = (event) => {
    event.preventDefault();
    const div = event.target.closest('.address');
    const address = div.querySelector('p').textContent;
    setDeliveryAddress(address);
  }

  const addAddress = (event) => {
    event.preventDefault();
    const form = event.target.closest('form');
    const address = form.address.value;
    console.log(address);

    setAddresses((prevAddress) => {
      let checked = prevAddress.length === 0;
      if(checked) setDeliveryAddress(address);
      return [...prevAddress, {address, checked}];
    });
  }

  const addressHandleChange = (index) => {
    setAddresses(prevAddresses => {
      const newAddresses = prevAddresses.slice();
      newAddresses.forEach(address => address.checked = false);
      const address = newAddresses[index];
      address.checked = true;
      return newAddresses;
    })
  }

  const [payments, setPayments] = useState([{payment: 'UPI', checked: true}]);
  const [selectedPayment, setSelectedPayment] = useState('UPI');

  const selectPayment = (event) => {
    event.preventDefault();
    const div = event.target.parentNode;
    const payment = div.querySelector('.payment').textContent;
    setSelectedPayment(payment);
  }

  const addPayment = (event) => {
    event.preventDefault();
    const form = event.target.closest('form');
    const payment = form.payment.value;

    console.log(payment)
    setPayments((prevPayment) => {
      let checked = prevPayment.length === 0;
      if(checked) setSelectedPayment(payment);
      return [...prevPayment, {payment, checked}];
    });
  }

  const paymentHandleChange = (index) => {
    setPayments(prevPayments => {
      const newPayments = prevPayments.slice();
      newPayments.forEach(payment => payment.checked = false);
      const payment = newPayments[index];
      payment.checked = true;
      return newPayments;
    })
  }

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
            total={total}
            updateCart={updateCart}
          />
        </Route>
        <Route path="/buy">
          <Buy
            cartItems={cartItems}
            total={total}
            addresses={addresses}
            handleChange={addressHandleChange}
            addAddress={addAddress}
            selectDeliveryAddress={selectDeliveryAddress}
          />
        </Route>
        <Route path="/payment">
          <Payment
            total={total}
            payments={payments}
            handleChange={paymentHandleChange}
            addPayment={addPayment}
            selectPayment={selectPayment}
          />
        </Route>
        <Route path="/placeorder">
          <PlaceOrder
            cartItems={cartItems}
            total={total}
            payment={selectedPayment}
            address={deliveryAddress}
            clearCart={clearCart}
          />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
