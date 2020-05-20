import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
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
import { ReactComponent as Person } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as Bag } from "bootstrap-icons/icons/bag.svg";
import { stateContext } from "../contexts/StateProvider";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

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

    const length = cart.length;

    return (
        <header>
            <Navbar color="dark" dark expand="sm">
                <NavbarBrand tag={Link} to="/" title="Go to home">
                    <Logo />
                </NavbarBrand>
                <Button color="link" className="header-option">
                    <Person />
                </Button>
                <Button
                    color="link"
                    className="header-option header-option--small"
                    title={`You have ${length} items in the cart`}
                    onClick={openCart}
                >
                    <Bag />
                    {!!length && (
                        <>
                            &nbsp;
                            <Badge color="primary">{length}</Badge>
                        </>
                    )}
                </Button>
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
                        <NavLink tag={Link} to="/orders" title="Orders">
                            Orders
                        </NavLink>
                        <NavLink tag={Link} to="/profile" title="User profile">
                            Profile
                        </NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
