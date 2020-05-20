import React from "react";
import Header from "./Header";
import Subscribe from "../base/Subscribe";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Cart from "../base/cart/Cart";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Subscribe />
            <Footer />
            <Copyright />
            <Cart />
        </>
    );
};

export default Layout;
