import React from "react";
import { Container, Row, Col } from "reactstrap";

const Features = () => {
    return (
        <section className="features">
            <Container>
                <h2 className="title">Features</h2>
                <Row tag="ul">
                    <Col tag="li" sm={4}>
                        <h3>
                            <span role="img" aria-label="Shipment">
                                🚚
                            </span>
                            Free shipping
                        </h3>
                        Ship to any city & state for free
                    </Col>
                    <Col tag="li" sm={4}>
                        <h3>
                            <span role="img" aria-label="Secure payment">
                                💳
                            </span>
                            Secure payment
                        </h3>
                        Visa and MasterCard accepted.
                    </Col>
                    <Col tag="li" sm={4}>
                        <h3>
                            <span role="img" aria-label="25 hours">
                                🕧
                            </span>
                            7/24 Support
                        </h3>
                        Online support 24 hours a day.
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
