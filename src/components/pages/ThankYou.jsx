import React, { useRef, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Container, Button } from "reactstrap";
import useCart from "../../hooks/useCart";
import useOrder from "../../hooks/useOrder";

const ThankYou = () => {
    const { removeAll } = useCart();

    const { order } = useOrder();

    const location = useLocation();

    const history = useHistory();

    const email = useRef(order.email);

    const fromCheckout = useRef(location.state && location.state.from_checkout);

    useEffect(() => {
        if (!fromCheckout.current) return;

        removeAll();

        history.replace(location.pathname, {});

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!fromCheckout.current) {
        history.replace("/");
    }

    return (
        <Container tag="section" className="spacing">
            <h1 className="title">
                Thank You!&nbsp;
                <span role="img" aria-label="Congrats">
                    🎉
                </span>
            </h1>
            <p>
                Your order is being reviewed by our staff. You will receive a
                confirmation email at <strong>{email.current}</strong>. If you
                don't hear from us within 24 hours, please contact us.
            </p>
            <Button color="primary" className="mt-3" tag={Link} to="/products">
                Continue shopping
            </Button>
        </Container>
    );
};

export default ThankYou;
