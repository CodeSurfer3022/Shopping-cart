import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Routes />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);

