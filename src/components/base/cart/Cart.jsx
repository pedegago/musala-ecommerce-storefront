import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Row, Col, Modal, ModalBody as Body } from "reactstrap";
import { stateContext } from "../../contexts/StateProvider";
import useSummary from "../../../hooks/useSummary";
import CartItems from "./CartItems";

const Cart = () => {
    const {
        state: { ui, cart },
        setState
    } = useContext(stateContext);

    const { total } = useSummary();

    const location = useLocation();

    const toggle = () =>
        setState({
            ui: { ...ui, cart_open: false }
        });

    useEffect(toggle, [location.pathname]);

    const length = cart.length;

    return (
        <Modal isOpen={ui.cart_open} toggle={toggle} className="cart">
            <Body>
                {!length ? (
                    <p className="text-center">Your cart is empty.</p>
                ) : (
                    <Row>
                        <Col tag="h2">
                            <strong>{length}</strong> items in cart
                            <br />
                            <span>
                                <strong>Total:</strong>&nbsp; ${total}
                            </span>
                        </Col>
                        <Col>
                            <Button
                                tag={Link}
                                block
                                color="primary"
                                to="/checkout"
                            >
                                <span className="d-none d-sm-inline">
                                    Proceed to
                                </span>{" "}
                                Checkout
                            </Button>
                        </Col>
                        <Col tag="ul" xs={12}>
                            <CartItems />
                        </Col>
                        <Col
                            tag={Link}
                            to="/products"
                            onClick={toggle}
                            className="text-center"
                        >
                            Continue shopping
                        </Col>
                    </Row>
                )}
            </Body>
        </Modal>
    );
};

export default Cart;
