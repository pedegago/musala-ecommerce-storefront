import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import { stateContext } from "../../contexts/StateProvider";
import useCart from "../../../hooks/useCart";

const CartItems = () => {
    const { remove } = useCart();

    const {
        state: { cart }
    } = useContext(stateContext);

    return cart.map(i => (
        <Row key={i.id} tag="li">
            <Col tag={Link} to={`/products/${i.url}`} xs="auto">
                <img src={i.thumbnail} alt={i.name} />
            </Col>
            <Col>
                <h3>{i.name}</h3>
                <p className="text-muted">
                    {i.quantity} x ${i.price}
                </p>
            </Col>
            <Col xs="auto" className="align-self-center">
                <Button color="light" onClick={() => remove(i.id)}>
                    &times;
                </Button>
            </Col>
        </Row>
    ));
};

export default CartItems;
