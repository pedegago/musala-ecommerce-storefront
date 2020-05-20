import React from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "./Product";
import useProducts from "../../hooks/useProducts";

const BestSellers = () => {
    const products = useProducts();

    const bestsellers = products.filter(p => p.bestseller);

    return (
        <Container tag="section" className="bestsellers spacing">
            <h2 className="title">Best sellers</h2>
            <Row tag="ul">
                {bestsellers.map(b => (
                    <Col key={b.id} tag="li" xs={6} md={4} lg={3}>
                        <Product product={b} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BestSellers;
