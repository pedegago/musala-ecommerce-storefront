import React, { useState, useRef, useEffect } from "react";
import { Container, Spinner, Table } from "reactstrap";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Orders = () => {
    const [loading, setLoading] = useState(true);

    const orders = useRef([]);

    const { auth, signedIn, authHeader } = useAuth();

    useEffect(() => {
        if (!signedIn) return;

        axios
            .get(`${process.env.REACT_APP_API_URL}/orders`, {
                headers: authHeader,
                params: { customer: auth.username }
            })
            .then(res => {
                orders.current = res;

                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedIn]);

    return (
        <Container tag="section" className="spacing">
            <h1 className="title">Orders history</h1>
            {loading ? (
                <>
                    <Spinner size="sm" className="mr-2" />
                    Loading...
                </>
            ) : (
                <Table>
                    <thead>
                        <tr>Transaction #</tr>
                        <tr>Fullname</tr>
                        <tr>Email</tr>
                        <tr>Full address</tr>
                        <tr>Date</tr>
                        <tr>Products</tr>
                    </thead>
                    <tbody>
                        {orders.map(o => (
                            <tr key={o.id}>
                                <th scope="row">{o.id}</th>
                                <td>{o.fullname}</td>
                                <td>{o.email}</td>
                                <td>{`${o.address} ${o.city}, ${o.state} ${o.zip}`}</td>
                                <td>{o.createdAt}</td>
                                <td>{o.products.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default Orders;
