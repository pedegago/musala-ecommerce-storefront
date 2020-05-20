import { useContext, useEffect } from "react";
import { stateContext } from "../components/contexts/StateProvider";
import { getStorage, setStorage } from "../utils/utils";

const useOrder = () => {
    const {
        state: { order },
        setState
    } = useContext(stateContext);

    useEffect(() => {
        const storage = getStorage("order") || {};

        setState({
            order: { ...order, ...storage }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const update = object => {
        setStorage("order", object);

        setState({ order: object });
    };

    return { order, update };
};

export default useOrder;
