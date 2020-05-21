import { useContext, useEffect } from "react";
import axios from "axios";
import { stateContext } from "../components/contexts/StateProvider";
import { setStorage, getStorage } from "../utils/utils";
import { useHistory } from "react-router-dom";

const useAuth = () => {
    const {
        state: { auth },
        setState
    } = useContext(stateContext);

    const history = useHistory();

    useEffect(() => {
        const storage = getStorage("auth") || {};

        setState({
            auth: { ...storage }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = (username, password) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}/signin`, {
                username,
                password
            })
            .then(res => {
                if (res.data.accessToken) {
                    setStorage("auth", res.data);

                    setState({ auth: res.data });

                    history.push("/profile");
                }

                return res.data;
            });
    };

    const logout = () => {
        setStorage("auth", {});

        setState({ auth: {} });
    };

    const authHeader = () => {
        return !auth || !auth.accessToken
            ? {}
            : {
                  "x-access-token": `Bearer ${auth.accessToken}`
              };
    };

    const signedIn = auth && auth.accessToken;

    return { auth, signedIn, login, logout, authHeader };
};

export default useAuth;
