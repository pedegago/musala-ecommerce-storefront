import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import useAuth from "../../hooks/useAuth";

const SigninToggle = () => {
    const { auth, signedIn, signout } = useAuth();

    const history = useHistory();

    const handleAuth = () => {
        signedIn ? signout() : history.push("/signin");
    };

    return (
        <Button
            color="link"
            className="header-option"
            onClick={handleAuth}
            title={signedIn ? "Signout" : "Singin"}
        >
            <span role="img" aria-label={signedIn ? "Signout" : "Singin"}>
                {signedIn ? "🔒" : "🔓"}
            </span>
            <span className="d-none d-sm-inline">
                &nbsp;
                {signedIn ? `Welcome, ${auth.fullname}` : "Sign in"}
            </span>
        </Button>
    );
};

export default SigninToggle;
