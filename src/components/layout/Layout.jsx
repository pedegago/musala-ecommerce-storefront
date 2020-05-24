import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Subscribe from "../base/Subscribe";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Cart from "../base/cart/Cart";

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => window.scrollTo(0, 0), [location]);

    return (
        <>
            <Header />
            <main>{children}</main>
            <Subscribe />
            <Footer />
            <Copyright />
            <Cart />
        </>
    );
};

export default Layout;
