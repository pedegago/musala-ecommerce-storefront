import React from "react";
import { Table } from "reactstrap";
import CartItems from "./CartItems";
import useCart from "../../../hooks/useCart";
import useSummary from "../../../hooks/useSummary";

const Summary = () => {
    const { cart } = useCart();

    const { total } = useSummary();

    return (
        <div className="checkout-summary-wrapper">
            <h2>Order summary</h2>
            <p className="mt-2">
                <strong>{cart.length}</strong> Items in cart
            </p>
            <Table borderless size="sm">
                <tbody>
                    <tr>
                        <th scope="row">Subtotal:</th>
                        <td>${total}</td>
                    </tr>
                    <tr>
                        <th scope="row">Shipping:</th>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <th scope="row">Tax:</th>
                        <td>$0.00</td>
                    </tr>
                    <tr className="text-danger">
                        <th scope="row">Total:</th>
                        <td>${total}</td>
                    </tr>
                </tbody>
            </Table>
            <CartItems summary />
        </div>
    );
};

export default Summary;
