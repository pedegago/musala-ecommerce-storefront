import { useContext } from "react";
import { stateContext } from "../components/contexts/StateProvider";

const useSummary = () => {
    const {
        state: { cart }
    } = useContext(stateContext);

    const total = cart
        .reduce((sum, p) => sum + p.price * p.quantity, 0)
        .toFixed(2);

    return { total };
};

export default useSummary;
