import React from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "../base/Product";
import Loading from "../base/Loading";
import useProducts from "../../hooks/useProducts";

const Products = () => {
    const { products, loading } = useProducts();

    return (
        <Container tag="section" className="products spacing">
            <h1 className="title">Framed artworks</h1>
            {loading ? (
                <Loading />
            ) : (
                <Row tag="ul">
                    {!products.length && (
                        <Col>Sorry, there are no artworks at this moment.</Col>
                    )}
                    {products.map(p => (
                        <Col key={p.id} tag="li" xs={6} md={4} lg={3}>
                            <Product product={p} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Products;
