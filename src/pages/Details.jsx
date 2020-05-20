import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Product from "../components/base/Product";
import useProducts from "../hooks/useProducts";
import Reviews from "../components/base/Reviews";
import Error404 from "./404";

const Details = () => {
    const params = useParams();

    const products = useProducts();

    const product = products.find(p => p.url === params.url);

    if (!product) return <Error404 />;

    return (
        <>
            <Container tag="section" className="details spacing">
                <h1 className="title">Product details</h1>
                <Product product={product} details />
            </Container>
            <Reviews />
        </>
    );
};

export default Details;
