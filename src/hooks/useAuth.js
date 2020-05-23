import { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { stateContext } from "../components/contexts/StateProvider";
import { setStorage, getStorage } from "../utils/utils";

const useAuth = () => {
    const [loading, setLoading] = useState(true);

    const {
        state: { auth },
        setState
    } = useContext(stateContext);

    const location = useLocation();

    const history = useHistory();

    const signedIn = auth && auth.accessToken;

    useEffect(() => {
        const storage = getStorage("auth") || {};

        setState({ auth: { ...storage } });

        setLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signin = (username, password) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}/signin`, {
                username,
                password
            })
            .then(res => {
                if (res.data.accessToken) {
                    setStorage("auth", res.data);

                    setState({ auth: res.data });
                }
            });
    };

    const signout = () => {
        setStorage("auth", {});

        setState({ auth: {} });

        if (!["/profile", "/orders"].includes(location.pathname)) return;

        history.push("/");
    };

    const authHeader =
        !auth || !auth.accessToken
            ? {}
            : { "x-access-token": auth.accessToken };

    return { auth, signedIn, signin, signout, authHeader, loading };
};

export default useAuth;
