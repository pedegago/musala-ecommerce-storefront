import React from "react";
import { Spinner } from "reactstrap";

const Loading = () => {
    return (
        <>
            <Spinner size="sm" className="mr-2" />
            Loading...
        </>
    );
};

export default Loading;
