import { useState, useRef, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
    const [loading, setLoading] = useState(true);

    const products = useRef([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/products`)
            .then(res => {
                res.data.forEach(p => {
                    p.id = p._id;
                });

                products.current = res.data;
            })
            .finally(() => {
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { products: products.current, loading };
};

export default useProducts;
