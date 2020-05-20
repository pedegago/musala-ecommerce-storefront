import React from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "../components/base/Product";
import useProducts from "../hooks/useProducts";

const Products = () => {
    const products = useProducts();

    return (
        <Container tag="section" className="products spacing">
            <h1 className="title">Framed artworks</h1>
            <Row tag="ul">
                {products.map(p => (
                    <Col key={p.id} tag="li" xs={6} md={4} lg={3}>
                        <Product product={p} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
