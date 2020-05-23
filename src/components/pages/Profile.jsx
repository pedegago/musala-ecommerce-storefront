import React from "react";
import { Container, Form, FormGroup, Label, Input } from "reactstrap";
import Loading from "../base/Loading";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { auth, loading } = useAuth();

    return (
        <Container tag="section" className="profile spacing">
            <h1 className="title">Profile</h1>
            {loading ? (
                <Loading />
            ) : (
                <Form>
                    <FormGroup>
                        <Label for="token">Fullname</Label>
                        <Input
                            id="token"
                            defaultValue={auth.fullname}
                            readOnly
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            id="username"
                            defaultValue={auth.username}
                            readOnly
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="token">Token</Label>
                        <Input
                            id="token"
                            defaultValue={`${auth.accessToken.substr(
                                0,
                                20
                            )}...`}
                            readOnly
                        />
                    </FormGroup>
                </Form>
            )}
        </Container>
    );
};

export default Profile;
