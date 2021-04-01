import React from "react";
import {Link} from "react-router-dom";
import './Header.css'

function Header(props) {
    return(
        <header>
            <Link to="/">
              <h1>Fort Night</h1>
            </Link>
            <div>
                <Link to="/shop"><p className="shopIcon">Shop</p></Link>
            </div>
            <div className="shopping-bag">
                <Link to="/cart">
                  <i className="fas fa-shopping-bag fa-2x"></i>
                  <span>{props.cartCount}</span>
                </Link>
            </div>
        </header>
    )
}

export default Header;
