import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Products from "../pages/Products";
import Details from "../pages/Details";
import Checkout from "../pages/Checkout";
import ThankYou from "../pages/ThankYou";
import Error404 from "../pages/404";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/signin" component={Signin} />

            <Route path="/profile" component={Profile} />

            <Route exact path="/products" component={Products} />

            <Route path="/products/:url" component={Details} />

            <Route path="/checkout" component={Checkout} />

            <Route path="/thank-you" component={ThankYou} />

            <Route component={Error404} />
        </Switch>
    );
};

export default Routes;
