import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
    return(
        <header>
            <Link to="/"><h2>ApaNa</h2></Link>
            <div className="searchbar" />
            <div className="country" />
            <div className="greeting">Namaste, Chandra!</div>
            <div>
                <Link to="/shop">Shop</Link>
            </div>
            <div className="shopping-bag">
                <Link to="/cart"><i className="fas fa-shopping-bag"></i></Link>
                <span>{props.cartCount}</span>
            </div>
        </header>
    )
}

export default Header;