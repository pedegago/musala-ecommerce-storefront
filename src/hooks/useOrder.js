import { useContext, useEffect } from "react";
import axios from "axios";
import { stateContext } from "../components/contexts/StateProvider";
import useSummary from "./useSummary";
import useAuth from "./useAuth";
import { getStorage, setStorage } from "../utils/utils";

const useOrder = () => {
    const { total } = useSummary();

    const { auth, authHeader } = useAuth();

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
        return axios
            .post(`${process.env.REACT_APP_API_URL}/orders`, {
                ...order,
                total,
                products: cart.map(p => p.id)
            })
            .catch(e => console.error(e));
    };

    const update = object => {
        setStorage("order", object);

        setState({ order: object });
    };

    const orders = () => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}/orders`, {
                headers: authHeader,
                params: {
                    customer: auth.username
                }
            })
            .catch(e => console.error(e));
    };

    return { order, add, update, orders };
};

export default useOrder;
