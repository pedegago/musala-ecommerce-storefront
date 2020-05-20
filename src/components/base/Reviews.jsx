import React from "react";
import { Container, Row, Col } from "reactstrap";
import carmenAnnva from "../../assets/images/reviews/carmen-annova.jpg";
import yonelGarvik from "../../assets/images/reviews/yonel-garvik.jpg";
import jasminPutranka from "../../assets/images/reviews/jasmin-putranka.jpg";

const Reviews = () => {
    return (
        <Container tag="section" className="reviews spacing">
            <h2 className="title">Reviews</h2>
            <Row>
                <Col tag="blockquote" sm={6} md={4}>
                    <img src={carmenAnnva} alt="Carmen Annova" />
                    <br />
                    This store is the greatest one. Yesterday I install my
                    framed artwork on my wall and it looks beautifull now.
                    <p>Carmen Annova</p>
                </Col>
                <Col tag="blockquote" sm={6} md={4}>
                    <img src={yonelGarvik} alt="Yonel Garvik" />
                    <br />
                    Never I meet a store like this. For that reason, when I need
                    a new framed artwork, I will purchase on this store.
                    <p>Yonel Garvik</p>
                </Col>
                <Col tag="blockquote" md={4}>
                    <img src={jasminPutranka} alt="Carmen Annova" />
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
