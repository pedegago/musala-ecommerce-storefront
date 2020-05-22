import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const Error404 = () => {
    return (
        <Container tag="section" className="spacing">
            <h1 className="title">404</h1>
            <p>
                This page does not exist. Please, go back in order to begin your
                purchase. You can click in the bottom below to visit our store
                directly.
            </p>
            <Button color="primary" className="mt-3" tag={Link} to="/products">
                See our products
            </Button>
        </Container>
    );
};

export default Error404;
