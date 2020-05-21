import { useContext, useEffect } from "react";
import { stateContext } from "../components/contexts/StateProvider";
// import { getStorage, setStorage } from "../utils/utils";

const useAuth = () => {
    const {
        state: { ui, auth },
        setState
    } = useContext(stateContext);

    // useEffect(() => {
    //     const storage = getStorage("order") || {};

    //     setState({
    //         order: { ...order, ...storage }
    //     });

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // const update = object => {
    //     setStorage("order", object);

    //     setState({ order: object });
    // };

    const toggleLogin = open => {
        setState({
            ui: { ...ui, login_open: open }
        });
    };

    return { auth, toggleLogin };
};

export default useAuth;
