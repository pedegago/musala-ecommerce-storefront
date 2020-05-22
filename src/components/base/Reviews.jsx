import React from "react";
import { Container, Row, Col } from "reactstrap";

const Reviews = () => {
    const images = `${process.env.REACT_APP_ASSETS_URL}/reviews`;

    return (
        <Container tag="section" className="reviews spacing">
            <h2 className="title">Reviews</h2>
            <Row>
                <Col tag="blockquote" sm={6} md={4}>
                    <img
                        src={`${images}/carmen-annova.jpg`}
                        alt="Carmen Annova"
                    />
                    <p>⭐⭐⭐</p>
                    <br />
                    This store is the greatest one. Yesterday I installed my
                    framed artwork on my wall and it looks beautifull now.
                    <p>Carmen Annova</p>
                </Col>
                <Col tag="blockquote" sm={6} md={4}>
                    <img
                        src={`${images}/yonel-garvik.jpg`}
                        alt="Yonel Garvik"
                    />
                    <p>⭐⭐⭐⭐⭐</p>
                    <br />
                    Never I meet a store like this. For that reason, when I need
                    a new framed artwork, I will purchase on this store.
                    <p>Yonel Garvik</p>
                </Col>
                <Col tag="blockquote" md={4}>
                    <img
                        src={`${images}/jasmin-putranka.jpg`}
                        alt="Carmen Annova"
                    />
                    <p>⭐⭐⭐⭐</p>
                    <br />
                    Great! Now I have a beautifull framed artwork in my home. I
                    will come back to this store as soon as possible.
                    <p>Jasmin Putranka</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
