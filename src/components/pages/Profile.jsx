import React from "react";
import { Container, Form, FormGroup, Label, Input } from "reactstrap";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { auth } = useAuth();

    return (
        <Container tag="section" className="profile spacing">
            <h1 className="title">Your profile, {auth.username}</h1>
            <Form>
                <FormGroup>
                    <Label for="token">Token</Label>
                    <Input
                        id="token"
                        defaultValue={`${auth.accessToken.substr(0, 20)}...`}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input id="username" defaultValue={auth.username} />
                </FormGroup>
            </Form>
        </Container>
    );
};

export default Profile;
