import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Button } from "reactstrap";
import Loading from "../base/Loading";
import useAuth from "../../hooks/useAuth";
import useOrder from "../../hooks/useOrder";

const Orders = () => {
    const [loading, setLoading] = useState(true);

    const list = useRef([]);

    const { signedIn } = useAuth();

    const { orders } = useOrder();

    useEffect(() => {
        if (!signedIn) return;

        orders().then(res => {
            list.current = res.data;

            setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedIn]);

    return (
        <Container tag="section" className="orders spacing">
            <h1 className="title">Orders history</h1>
            {loading ? (
                <Loading />
            ) : !list.current.length ? (
                <>
                    <p>
                        No orders to show. Please, make a purchase and go back
                        to this page. You can click in the bottom below to begin
                        a purchase.
                    </p>
                    <Button
                        color="primary"
                        className="mt-3"
                        tag={Link}
                        to="/products"
                    >
                        See our products
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        color="primary"
                        className="orders-print"
                        onClick={() => window.print()}
                    >
                        Print orders
                    </Button>
                    <Table responsive hover striped>
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Full address</th>
                                <th>Date</th>
                                <th>Items</th>
                                <th className="text-danger">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.current.map(o => (
                                <tr key={o._id}>
                                    <th scope="row" className="text-primary">
                                        {o._id.substr(o._id.length - 5)}
                                    </th>
                                    <td>{o.fullname}</td>
                                    <td>{o.email}</td>
                                    <td>{`${o.address} ${o.city}, ${o.state} ${o.zip}`}</td>
                                    <td>
                                        {new Date(o.createdAt).toLocaleString()}
                                    </td>
                                    <td className="text-center">
                                        {o.products.length}
                                    </td>
                                    <td className="text-danger">${o.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </Container>
    );
};

export default Orders;
