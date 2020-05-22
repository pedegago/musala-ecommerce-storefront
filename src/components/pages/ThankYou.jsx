import React, { useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Container, Button } from "reactstrap";
import useCart from "../../hooks/useCart";
import useOrder from "../../hooks/useOrder";

const ThankYou = () => {
    const { cart, remove } = useCart();

    const { order } = useOrder();

    const location = useLocation();

    const history = useHistory();

    const email = useRef(order.email);

    if (!location.state || !location.state.from_checkout) {
        history.replace("/");

        return null;
    }

    cart.forEach(i => remove(i.id));

    return (
        <Container tag="section" className="spacing">
            <h1 className="title">Thank You!</h1>
            <p>
                Your order is being reviewed by our staff. You will receive a
                confirmation email to <strong>{email.current}</strong>. If you
                don't hear from us within 24 hours, please contact us.
            </p>
            <Button color="primary" className="mt-3" tag={Link} to="/products">
                Continue shopping
            </Button>
        </Container>
    );
};

export default ThankYou;
