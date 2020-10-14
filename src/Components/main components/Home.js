import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return(
        <div className="home">
            <Link to="/shop">Shop</Link>
            <p>this is home</p>
        </div>
    )
}

export default Home;