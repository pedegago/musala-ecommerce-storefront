import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";

const Product = ({ product, details }) => {
    const {
        image,
        thumbnail,
        url,
        name,
        price,
        on_sale,
        description
    } = product;

    const fullUrl = `/products/${url}`;

    return (
        <div className={`product ${details ? "" : "product-card"}`}>
            {on_sale && <p className="product-label">On sale!</p>}
            <Link to={fullUrl} title="Product details">
                <img src={details ? image : thumbnail} alt={name} />
            </Link>
            <div className="product-body">
                <Link to={fullUrl} title="Product details">
                    <h2>{name}</h2>
                </Link>
                <p className="product-price">
                    ${price}
                    <br />
                    <small>Plus applicable taxes</small>
                </p>
                {details && (
                    <div className="product-description">{description}</div>
                )}
                {details && "Quantity:"}
                <Counter product={product} />
            </div>
        </div>
    );
};

export default Product;
