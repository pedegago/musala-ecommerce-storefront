import React, { createContext, useState } from "react";

export const stateContext = createContext();

const StateProvider = ({ children, initialState }) => {
    const [value, setValue] = useState(initialState);

    const setState = newState => {
        setValue(oldState => ({
            ...oldState,
            ...newState
        }));
    };

    return (
        <stateContext.Provider
            value={{
                setState,
                state: value
            }}
        >
            {children}
        </stateContext.Provider>
    );
};

export default StateProvider;
