import React from "react";
import {Link} from "react-router-dom";
import './Home.css'

function Home() {
    return(
        <div className="home">
            <h2>Are you a Knight? Welcome to Fort night</h2>
            <Link to="/shop">
              <button>Purchase artefacts</button>
            </Link>
        </div>
    )
}

export default Home;
