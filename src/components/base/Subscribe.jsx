import React from "react";
import { Row, Col, Form, Input, Button, Container } from "reactstrap";

const Subscribe = () => {
    const subscribe = e => {
        const form = document.getElementById("subscription-form");

        if (!form.checkValidity()) return;

        alert("You are subscribed now!");

        e.preventDefault();
    };

    return (
        <section className="subscribe">
            <Container>
                <Row
                    id="subscription-form"
                    tag={Form}
                    className="align-items-center"
                >
                    <Col tag="h2" md={6}>
                        I want to know about new framed artworks.
                    </Col>
                    <Col md={6} className="subscribe-control">
                        <Input
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            aria-label="Email"
                        />
                        <Button
                            type="submit"
                            color="primary"
                            onClick={subscribe}
                        >
                            Subscribe
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Subscribe;
