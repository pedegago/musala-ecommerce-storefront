import React from "react";
import {
    Container,
    Row,
    Col,
    FormGroup,
    FormFeedback,
    Label,
    Input,
    Button
} from "reactstrap";
import Product from "../components/base/Product";
import useForm from "../hooks/useForm";
import useValidator from "../hooks/useValidator";

const rules = [
    {
        field: "fullname",
        method: "isEmpty",
        args: [{ ignore_whitespace: true }],
        validWhen: false,
        message: "Full name is required."
    },
    {
        field: "emailAddress",
        method: "isEmail",
        validWhen: true,
        message: "That is not a valid email."
    },
    {
        field: "phoneNumber",
        method: this.validPhoneNumber,
        validWhen: true,
        message: "That is not a valid phone number."
    },
    {
        field: "cardNumber",
        method: "matches",
        args: [/^(\d{4}\s){3}\d{4}$/],
        validWhen: true,
        message: "That is not a valid card number."
    },
    {
        field: "expMonth",
        method: "isInt",
        args: [{ min: 1, max: 12, allow_leading_zeroes: true }],
        validWhen: true,
        message: "That is not a valid month."
    },
    {
        field: "expYear",
        method: "isInt",
        args: [{ min: new Date().getFullYear() }],
        validWhen: true,
        message: "That is not a valid year."
    },
    {
        field: "cardCode",
        method: "matches",
        args: [/^\d{3}$/],
        validWhen: true,
        message: "That is not a valid card code."
    },
    {
        field: "zipcode",
        method: "isPostalCode",
        args: ["US"],
        validWhen: true,
        message: "That is not a valid billing zip."
    }
];

const Checkout = () => {
    const { inputs, inputChange } = useForm();

    const { validator, isValid, isSubmited } = useValidator(rules, {
        ...inputs
    });

    return (
        <Container tag="section" className="checkout spacing">
            <h1 className="title">Checkout</h1>

        </Container>
    );
};

export default Checkout;
