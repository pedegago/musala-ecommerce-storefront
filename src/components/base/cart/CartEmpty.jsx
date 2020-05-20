import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const CartEmpty = () => {
    return (
        <>
            <p>
                Sorry, but you need to populate your cart before proceed to
                checkout you order. Please, go back in order to begin your
                purchase. You can click in the bottom below to visit our store
                directly.
            </p>
            <Button color="primary" className="mt-3" tag={Link} to="/products">
                See our products
            </Button>
        </>
    );
};

export default CartEmpty;
