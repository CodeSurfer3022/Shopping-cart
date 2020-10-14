import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return(
        <div className="home">
            <p>this is home</p>
            <Link to="/shop"><p>Proceed to shop</p></Link>
        </div>
    )
}

export default Home;