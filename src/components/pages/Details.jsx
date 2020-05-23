import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Product from "../base/Product";
import useProducts from "../../hooks/useProducts";
import Reviews from "../base/Reviews";
import Error404 from "./404";
import Loading from "../base/Loading";

const Details = () => {
    const params = useParams();

    const { products, loading } = useProducts();

    const product = products.find(p => p.url === params.url);

    if (!product && !loading) return <Error404 />;

    return (
        <>
            <Container tag="section" className="details spacing">
                <h1 className="title">Product details</h1>
                {loading ? <Loading /> : <Product product={product} details />}
            </Container>
            {!loading && <Reviews />}
        </>
    );
};

export default Details;
