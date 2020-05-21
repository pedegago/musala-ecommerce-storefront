import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";
import Input from "../components/base/Input";
import useForm from "../hooks/useForm";
import useValidator from "../hooks/useValidator";
import { checkoutRules } from "../utils/constants";
import Summary from "../components/base/cart/Summary";
import useOrder from "../hooks/useOrder";
import cards from "../assets/images/cards.png";
import useCart from "../hooks/useCart";
import CartEmpty from "../components/base/cart/CartEmpty";

const Checkout = () => {
    const { inputs, setInputs, inputChange } = useForm();

    const {
        inputs: paymentInputs,
        inputChange: paymentInputChange
    } = useForm();

    const { validator, isValid, isSubmited } = useValidator(checkoutRules, {
        ...inputs,
        ...paymentInputs
    });

    const loading = useRef(true);

    const history = useHistory();

    const { order, update } = useOrder();

    const { cart } = useCart();

    useEffect(() => {
        loading.current = false;

        setInputs(order);
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

        history.push("/thank-you", { from_checkout: true });
    };

    return (
        <Container tag="section" className="checkout spacing">
            <h1 className="title">Checkout</h1>
            {loading.current ? (
                "Loading..."
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
                            <img src={cards} alt="Payment cards" />
                        </h2>
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
