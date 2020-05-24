import React, { useState, useEffect } from "react";
import { NavLink as Link, useLocation } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink
} from "reactstrap";
import Logo from "../base/Logo";
import CartToggle from "../base/cart/CartToggle";
import SigninToggle from "../base/SigninToggle";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { signedIn } = useAuth();

    const location = useLocation();

    const toggle = () => setIsOpen(isOpen => !isOpen);

    useEffect(() => setIsOpen(false), [location.pathname]);

    return (
        <header>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/" title="Go to home">
                    <Logo />
                </NavbarBrand>
                <SigninToggle />
                <CartToggle />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar tag="nav">
                        <NavLink tag={Link} exact to="/" title="Go to home">
                            Home
                        </NavLink>
                        <NavLink
                            tag={Link}
                            to="/products"
                            title="Products list"
                        >
                            Products
                        </NavLink>
                        {signedIn ? (
                            <>
                                <NavLink tag={Link} to="/orders" title="Orders">
                                    Orders
                                </NavLink>
                                <NavLink
                                    tag={Link}
                                    to="/profile"
                                    title="User profile"
                                >
                                    Profile
                                </NavLink>
                            </>
                        ) : (
                            <NavLink tag="span" className="text-secondary">
                                Sign in for more!
                            </NavLink>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
