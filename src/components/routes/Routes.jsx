import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Details from "../pages/Details";
import Checkout from "../pages/Checkout";
import ThankYou from "../pages/ThankYou";
import Error404 from "../pages/404";
import useAuth from "../../hooks/useAuth";

const AuthRoute = ({ children, signedIn, loading, ...props }) => (
    <Route
        {...props}
        render={() => {
            if (loading) return children;

            return signedIn ? (
                children
            ) : (
                <Redirect to={{ pathname: "/signin" }} />
            );
        }}
    />
);

const Routes = () => {
    const { signedIn, loading } = useAuth();

    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/products" component={Products} />

            <Route path="/products/:url" component={Details} />

            <Route path="/checkout" component={Checkout} />

            <Route path="/thank-you" component={ThankYou} />

            <Route
                path="/signin"
                render={() =>
                    !signedIn ? <Signin /> : <Redirect to={"/profile"} />
                }
            />

            <AuthRoute path="/profile" signedIn={signedIn} loading={loading}>
                <Profile />
            </AuthRoute>

            <AuthRoute path="/orders" signedIn={signedIn} loading={loading}>
                <Orders />
            </AuthRoute>

            <Route component={Error404} />
        </Switch>
    );
};

export default Routes;
