import React from "react";
import { Row, Col, Form, Input, Button, Container } from "reactstrap";

const Subscribe = () => {
    const subscribe = e => {
        const email = document.getElementById("email");

        if (!email.checkValidity()) return;

        e.preventDefault();

        alert("You are subscribed now!");
    };

    return (
        <section className="subscribe">
            <Container>
                <Form action="/" tag={Row} className="align-items-center">
                    <Col tag="h2" md={6}>
                        I want to know about new framed artworks.
                    </Col>
                    <Col md={6} className="subscribe-control">
                        <Input
                            id="email"
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
                </Form>
            </Container>
        </section>
    );
};

export default Subscribe;
