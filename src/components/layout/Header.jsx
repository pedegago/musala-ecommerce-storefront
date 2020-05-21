import React, { useState, useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    Button,
    Badge
} from "reactstrap";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { stateContext } from "../contexts/StateProvider";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { auth, signedIn, signout } = useAuth();

    const history = useHistory();

    const location = useLocation();

    const {
        state: { ui, cart },
        setState
    } = useContext(stateContext);

    const toggle = () => setIsOpen(isOpen => !isOpen);

    const openCart = () => {
        setState({
            ui: { ...ui, cart_open: true }
        });
    };

    const handleAuth = () => {
        signedIn ? signout() : history.push("/signin");
    };

    const length = cart.length;

    const isCheckout = location.pathname === "/checkout";

    return (
        <header>
            <Navbar color="dark" dark expand="sm">
                <NavbarBrand tag={Link} to="/" title="Go to home">
                    <Logo />
                </NavbarBrand>
                <Button
                    color="link"
                    className="header-option"
                    onClick={handleAuth}
                    title={signedIn ? "Signout" : "Singin"}
                >
                    <span
                        role="img"
                        aria-label={signedIn ? "Signout" : "Singin"}
                    >
                        {signedIn ? "🔒 " : "🔓 "}
                    </span>
                    {signedIn ? `Signed in as: ${auth.username}` : "Sign in"}
                </Button>
                {!isCheckout && (
                    <Button
                        color="link"
                        className="header-option"
                        title={`You have ${length} items in the cart`}
                        onClick={openCart}
                    >
                        <span role="img" aria-label="Cart">
                            🛒
                        </span>
                        {!!length && (
                            <>
                                &nbsp;
                                <Badge color="primary">{length}</Badge>
                            </>
                        )}
                    </Button>
                )}
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar tag="nav">
                        <NavLink tag={Link} to="/" title="Go to home">
                            Home
                        </NavLink>
                        <NavLink
                            tag={Link}
                            to="/products"
                            title="Products list"
                        >
                            Products
                        </NavLink>
                        {signedIn && (
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
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
