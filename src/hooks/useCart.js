import { useState, useContext, useEffect } from "react";
import { stateContext } from "../components/contexts/StateProvider";
import { getStorage, setStorage } from "../utils/utils";

const useCart = () => {
    const [loading, setLoading] = useState(true);

    const {
        state: { cart },
        setState
    } = useContext(stateContext);

    useEffect(() => {
        const cart = getStorage("cart") || [];

        setState({ cart });

        setLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const add = product => {
        const item = { ...product, quantity: 1 };

        const items = [...cart, item];

        setStorage("cart", items);

        setState({ cart: items });
    };

    const remove = id => {
        const items = cart.filter(i => i.id !== id);

        setStorage("cart", items);

        setState({ cart: items });
    };

    const removeAll = () => {
        setStorage("cart", []);

        setState({ cart: [] });
    };

    const update = (id, quantity) => {
        let items = [...cart];

        if (quantity === 0) {
            items = items.filter(i => i.id !== id);
        } else {
            items.forEach(i => {
                if (i.id === id) i.quantity = quantity;
            });
        }

        setStorage("cart", items);

        setState({ cart: items });
    };

    return { cart, loading, add, remove, removeAll, update };
};

export default useCart;
