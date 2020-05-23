import React from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "./Product";
import Loading from "./Loading";
import useProducts from "../../hooks/useProducts";

const BestSellers = () => {
    const { products, loading } = useProducts();

    const bestsellers = products.filter(p => p.bestseller);

    return (
        <Container tag="section" className="bestsellers spacing">
            <h2 className="title">Best sellers</h2>
            {loading ? (
                <Loading />
            ) : (
                <Row tag="ul">
                    {!products.length && (
                        <Col>No artworks marked as bestsellers.</Col>
                    )}
                    {bestsellers.map(b => (
                        <Col
                            key={b.id}
                            tag="li"
                            xs={6}
                            md={4}
                            lg={3}
                            className="mb-4"
                        >
                            <Product product={b} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default BestSellers;
