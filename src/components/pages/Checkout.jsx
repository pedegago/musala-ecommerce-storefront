import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, FormGroup, Button, Spinner } from "reactstrap";
import Input from "../base/Input";
import useForm from "../../hooks/useForm";
import useValidator from "../../hooks/useValidator";
import { checkoutRules, emailHelp } from "../../utils/constants";
import Summary from "../base/cart/Summary";
import useOrder from "../../hooks/useOrder";
import useCart from "../../hooks/useCart";
import CartEmpty from "../base/cart/CartEmpty";

const Checkout = () => {
    const [loading, setLoading] = useState(true);

    const { inputs, setInputs, inputChange } = useForm();

    const {
        inputs: paymentInputs,
        inputChange: paymentInputChange
    } = useForm();

    const { validator, isValid, isSubmited } = useValidator(checkoutRules, {
        ...inputs,
        ...paymentInputs
    });

    const history = useHistory();

    const { order, update, add } = useOrder();

    const { cart, loading: loadingCart } = useCart();

    useEffect(() => {
        setInputs(order);

        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [order]);

    const handleInput = e => {
        const object = e.target;

        inputChange(e);

        update({ ...inputs, [object.name]: object.value });
    };

    const pay = () => {
        isSubmited(true);

        if (!isValid) return;

        setLoading(true);

        add()
            .then(() => {
                history.push("/thank-you", { from_checkout: true });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Container tag="section" className="checkout spacing">
            <h1 className="title">Checkout</h1>
            {loadingCart ? (
                <>
                    <Spinner size="sm" className="mr-2" />
                    Loading...
                </>
            ) : !cart.length ? (
                <CartEmpty />
            ) : (
                <Row>
                    <Col md={5} lg={4} className="checkout-summary">
                        <Summary />
                    </Col>
                    <Col tag="form" md={7} lg={6} xl={5}>
                        <h2>Shipping & Billing</h2>
                        {["email", "fullname", "address"].map(f => (
                            <FormGroup key={f}>
                                <Input
                                    name={f}
                                    inputs={inputs}
                                    validator={validator}
                                    inputChange={handleInput}
                                    {...(f === "email"
                                        ? { help: emailHelp }
                                        : {})}
                                />
                            </FormGroup>
                        ))}
                        <Row form className="form-group">
                            {["state", "city", "zip"].map(f => (
                                <Col key={f} tag={FormGroup}>
                                    <Input
                                        name={f}
                                        inputs={inputs}
                                        validator={validator}
                                        inputChange={handleInput}
                                        {...(f === "zip"
                                            ? {
                                                  help: "Zip code for Bulgaria."
                                              }
                                            : {})}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <h2 className="d-flex justify-content-between">
                            Payment
                            <img
                                src={`${process.env.REACT_APP_ASSETS_URL}/cards.png`}
                                alt="Payment cards"
                            />
                        </h2>
                        <small className="checkout-payment-note">
                            Your payment information will be not persisted in
                            the local storage for security purposes.
                        </small>
                        <br />
                        <FormGroup>
                            <Input
                                name="credit_card"
                                inputs={paymentInputs}
                                validator={validator}
                                inputChange={paymentInputChange}
                                help="Format: 0000 0000 0000 0000"
                            />
                        </FormGroup>
                        <Row form className="form-group">
                            {[
                                ["exp_month", "From 1 to 12"],
                                ["exp_year", ">= Current year"],
                                ["card_code", "Any 3 digits"]
                            ].map(f => (
                                <Col key={f} tag={FormGroup}>
                                    <Input
                                        name={f[0]}
                                        inputs={paymentInputs}
                                        validator={validator}
                                        inputChange={paymentInputChange}
                                        help={f[1]}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <FormGroup className="text-right mt-4 mb-0">
                            <Button color="primary" onClick={pay}>
                                {loading && (
                                    <Spinner size="sm" className="mr-2" />
                                )}
                                Pay order
                            </Button>
                        </FormGroup>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Checkout;
