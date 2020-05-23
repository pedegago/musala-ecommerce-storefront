import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Button, Badge } from "reactstrap";
import { stateContext } from "../../contexts/StateProvider";
import useCart from "../../../hooks/useCart";

const CartToggle = () => {
    const location = useLocation();

    const { cart } = useCart();

    const {
        state: { ui },
        setState
    } = useContext(stateContext);

    const openCart = () => {
        setState({
            ui: { ...ui, cart_open: true }
        });
    };

    const length = cart.length;

    const isCheckout = location.pathname === "/checkout";

    return !isCheckout ? (
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
                    <Badge color="primary">{length}</Badge>
                </>
            )}
        </Button>
    ) : null;
};

export default CartToggle;
