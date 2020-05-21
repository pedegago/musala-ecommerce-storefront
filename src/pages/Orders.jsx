import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";
import useAuth from "../hooks/useAuth";

const Orders = () => {
    const { auth } = useAuth();

    return (
        <Container tag="section" className="spacing">
            <h1 className="title">Orders history</h1>
        </Container>
    );
};

export default Orders;
