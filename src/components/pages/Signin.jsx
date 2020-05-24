import React, { useState } from "react";
import { Container, Form, FormGroup, Button, Spinner, Alert } from "reactstrap";
import Input from "../base/Input";
import useForm from "../../hooks/useForm";
import useValidator from "../../hooks/useValidator";
import { signinRules } from "../../utils/constants";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const { inputs, inputChange } = useForm();

    const { validator, isValid, isSubmited } = useValidator(signinRules, {
        ...inputs
    });

    const { signin } = useAuth();

    const handleSignin = () => {
        isSubmited(true);

        closeAlert();

        if (!isValid) return;

        setLoading(true);

        signin(inputs.username, inputs.password).catch(e => {
            setLoading(false);

            setError("Bad user or password.");
        });
    };

    const closeAlert = () => setError("");

    return (
        <Container tag="section" className="signin spacing">
            <h1 className="title">Sign in</h1>
            <Form>
                <span role="img" aria-label="Singin">
                    🔓
                </span>
                <Alert isOpen={!!error} toggle={closeAlert} color="danger">
                    {error}
                </Alert>
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
                    <Button
                        disabled={loading}
                        color="primary"
                        block
                        onClick={handleSignin}
                    >
                        {loading && <Spinner size="sm" className="mr-2" />}
                        Sign in
                    </Button>
                </FormGroup>
            </Form>
        </Container>
    );
};

export default Signin;
