import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import Product from "./Product";
import useProducts from "../../hooks/useProducts";

const BestSellers = () => {
    const { products, loading } = useProducts();

    const bestsellers = products.filter(p => p.bestseller);

    return (
        <Container tag="section" className="bestsellers spacing">
            <h2 className="title">Best sellers</h2>
            {loading ? (
                <>
                    <Spinner size="sm" className="mr-2" />
                    Loading...
                </>
            ) : (
                <Row tag="ul">
                    {!products.length && (
                        <Col>No artworks marked as bestsellers.</Col>
                    )}
                    {bestsellers.map(b => (
                        <Col key={b.id} tag="li" xs={6} md={4} lg={3}>
                            <Product product={b} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default BestSellers;
