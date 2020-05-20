import { useContext } from "react";
import { stateContext } from "../components/contexts/StateProvider";

const useCart = () => {
    const {
        state: { cart },
        setState
    } = useContext(stateContext);

    const add = product => {
        const item = { ...product, quantity: 1 };

        setState({
            cart: [...cart, item]
        });
    };

    const remove = id => {
        const items = cart.filter(i => i.id !== id);

        setState({ cart: items });
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

        setState({ cart: items });
    };

    return { cart, add, remove, update };
};

export default useCart;
