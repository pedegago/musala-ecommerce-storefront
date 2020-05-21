import React, { useState, useEffect } from "react";
import {
    Container,
    Form,
    FormGroup,
    Label,
    Button,
    Spinner,
    UncontrolledAlert
} from "reactstrap";
import Input from "../components/base/Input";
import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";
import useValidator from "../hooks/useValidator";
import { profileRules } from "../utils/constants";

const Profile = () => {
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const { inputs, setInputs, inputChange } = useForm();

    const { validator, isValid, isSubmited } = useValidator(profileRules, {
        ...inputs
    });

    const { auth } = useAuth();

    const handleUpdate = () => {
        isSubmited(true);

        if (!isValid) return;

        // setLoading(true);

        // signin(inputs.username, inputs.password)
        //     .catch(e => {
        //         setError("Wrong user or password.");
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    };

    return (
        <Container tag="section" className="profile spacing">
            <h1 className="title">Your profile, {auth.username}</h1>
            <Form>
                <UncontrolledAlert isOpen={!!error} color="danger">
                    {error}
                </UncontrolledAlert>
                <FormGroup>
                    <Label>Token</Label>
                    <p>{(auth.accessToken || "").substr(0, 20)}...</p>
                </FormGroup>
                <FormGroup>
                    <Label>Username</Label>
                    <p>{auth.username}</p>
                </FormGroup>
                <FormGroup>
                    <Input
                        name="password"
                        inputs={inputs}
                        validator={validator}
                        inputChange={inputChange}
                        type="password"
                        help="Write at least 7 characters."
                    />
                </FormGroup>
                <FormGroup className="text-right mt-4 mb-0">
                    <Button color="primary" onClick={handleUpdate}>
                        {loading && <Spinner size="sm" className="mr-2" />}
                        Update
                    </Button>
                </FormGroup>
            </Form>
        </Container>
    );
};

export default Profile;
