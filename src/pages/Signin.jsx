import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Button, Spinner } from "reactstrap";
import Input from "../components/base/Input";
import useForm from "../hooks/useForm";
import useValidator from "../hooks/useValidator";
import { signinRules } from "../utils/constants";
import Summary from "../components/base/cart/Summary";
import cards from "../assets/images/cards.png";
import CartEmpty from "../components/base/cart/CartEmpty";

const Signin = () => {
    const { inputs, setInputs, inputChange } = useForm();

    const { validator, isValid, isSubmited } = useValidator(signinRules, {
        ...inputs
    });

    const loading = useRef(false);

    const history = useHistory();

    // const { auth } = useOrder();

    // useEffect(() => {
    //     loading.current = false;

    //     // setInputs(order);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const signin = () => {
        isSubmited(true);

        if (!isValid) return;

        history.push("/profile");
    };

    return (
        <Container tag="section" className="signin spacing">
            <h1 className="title">Sign in</h1>
            {loading.current ? (
                "Loading..."
            ) : (
                <Form>
                    <span role="img" aria-label="Singin">
                        🔓
                    </span>
                    <FormGroup>
                        <Input
                            name="username"
                            inputs={inputs}
                            validator={validator}
                            inputChange={inputChange}
                            help="Try with: musala.soft@example.com"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            name="password"
                            inputs={inputs}
                            validator={validator}
                            inputChange={inputChange}
                            type="password"
                            help="Try with: Musalas0ft"
                        />
                    </FormGroup>
                    <FormGroup className="mt-4 mb-0">
                        <Button color="primary" block onClick={signin}>
                            <Spinner size="sm" className="mr-2" />
                            Sign in
                        </Button>
                    </FormGroup>
                </Form>
            )}
        </Container>
    );
};

export default Signin;
