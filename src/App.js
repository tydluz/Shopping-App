import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
    const isLoggeddIn = useSelector((state) => state.auth.isLoggeddIn);
    console.log(isLoggeddIn);
    const cartItems = useSelector((state) => state.cart.itemsList);
    console.log(cartItems);
    return (
        <div className="App">
            {!isLoggeddIn && <Auth />}
            {isLoggeddIn && <Layout />}
        </div>
    );
}

export default App;
