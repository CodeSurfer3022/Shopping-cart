import React from "react";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;