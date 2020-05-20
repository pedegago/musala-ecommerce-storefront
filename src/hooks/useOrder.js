import { useContext } from "react";
import { stateContext } from "../components/contexts/StateProvider";

const useOrder = () => {
    const {
        state: { order },
        setState
    } = useContext(stateContext);

    return { order };
};

export default useOrder;
