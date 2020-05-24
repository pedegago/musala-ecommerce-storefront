import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from "reactstrap";
import Loading from "../base/Loading";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const [fetching, setFetching] = useState(true);

    const [error, setError] = useState("");

    const [position, setPosition] = useState([]);

    const { auth, loading } = useAuth();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setPosition([
                        position.coords.latitude,
                        position.coords.longitude
                    ]);

                    setFetching(false);
                },
                e => {
                    setError(`Some error ocurred during fetching geolocation
                        information. Please, make sure you have authorized
                        this service on your device.`);

                    setFetching(false);
                }
            );
        } else {
            setError(`Sorry, but geolocation is not supported
                by this browser.`);

            setFetching(false);
        }
    }, []);

    const closeAlert = () => setError("");

    return (
        <Container tag="section" className="profile spacing">
            <h1 className="title">Profile</h1>
            {loading ? (
                <Loading />
            ) : (
                <Row>
                    <Col tag={Form} md={7} lg={6} xl={5}>
                        <h2>User information</h2>
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
                    </Col>
                    <Col md={5} lg={4} tag="aside">
                        <h2>Location</h2>
                        {fetching && <Loading />}
                        <Alert
                            isOpen={!!error}
                            toggle={closeAlert}
                            color="danger"
                        >
                            {error}
                        </Alert>
                        {!!position.length && (
                            <>
                                <figure>
                                    <img
                                        src={`https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${position[1]},${position[0]}&z=13&l=map&size=338,338`}
                                        alt="Your location"
                                    />
                                </figure>
                                <p>
                                    Your current location is:
                                    <br />
                                    <strong>Latitude:</strong> {position[0]}
                                    <br />
                                    <strong>Longitude:</strong> {position[1]}
                                </p>
                            </>
                        )}
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Profile;
