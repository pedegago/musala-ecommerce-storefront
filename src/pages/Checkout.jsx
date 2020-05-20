import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";
import Input from "../components/base/Input";
import useForm from "../hooks/useForm";
import useValidator from "../hooks/useValidator";
import { checkoutRules } from "../utils/constants";
import Summary from "../components/base/cart/Summary";

const Checkout = () => {
    const { inputs, inputChange } = useForm();

    const { validator, isValid, isSubmited } = useValidator(checkoutRules, {
        ...inputs
    });

    const history = useHistory();

    const pay = () => {
        isSubmited(true);

        if (!isValid) return;

        history.push("/thank-you", { from_checkout: true });
    };

    return (
        <Container tag="section" className="checkout spacing">
            <h1 className="title">Checkout</h1>
            <Row>
                <Col md={5} className="checkout-summary">
                    <Summary />
                </Col>
                <Col tag="form" md={7}>
                    <h2>Shipping & Billing</h2>
                    {["email", "fullname", "address"].map(f => (
                        <FormGroup key={f}>
                            <Input
                                name={f}
                                inputs={inputs}
                                validator={validator}
                                inputChange={inputChange}
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
                                    inputChange={inputChange}
                                    {...(f === "zip"
                                        ? {
                                              help: "Zip code for Bulgaria."
                                          }
                                        : {})}
                                />
                            </Col>
                        ))}
                    </Row>
                    <h2>Payment</h2>
                    <FormGroup>
                        <Input
                            name="credit_card"
                            inputs={inputs}
                            validator={validator}
                            inputChange={inputChange}
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
                                    inputs={inputs}
                                    validator={validator}
                                    inputChange={inputChange}
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
        </Container>
    );
};

export default Checkout;
