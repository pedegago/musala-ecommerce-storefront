import { useContext, useEffect } from "react";
import axios from "axios";
import { stateContext } from "../components/contexts/StateProvider";
import { getStorage, setStorage } from "../utils/utils";

const useOrder = () => {
    const {
        state: { order, cart },
        setState
    } = useContext(stateContext);

    useEffect(() => {
        const storage = getStorage("order") || {};

        setState({
            order: { ...order, ...storage }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const add = () => {
        const params = {
            ...order,
            products: cart.map(p => p.id)
        };

        return axios
            .post(`${process.env.REACT_APP_API_URL}/orders`, { params })
            .then(res => console.log("Added order:", res))
            .catch(e => console.error(e));
    };

    const update = object => {
        setStorage("order", object);

        setState({ order: object });
    };

    return { order, add, update };
};

export default useOrder;
