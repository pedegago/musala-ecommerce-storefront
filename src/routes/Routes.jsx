import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Checkout from "../pages/Checkout";
import ThankYou from "../pages/ThankYou";
import Error404 from "../pages/404";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/products" component={Products} />

            <Route path="/checkout" component={Checkout} />

            <Route path="/thank-you" component={ThankYou} />

            <Route component={Error404} />
        </Switch>
    );
};

export default Routes;
