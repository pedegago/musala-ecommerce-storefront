import { useState } from "react";

const useForm = () => {
    const [inputs, setInputs] = useState({});

    const setInput = (name, value) => {
        setInputs(last => ({
            ...last,
            [name]: value
        }));
    };

    const inputChange = e => {
        const { name, value, type, checked } = e.target;

        const isCheck = type === "checkbox";

        setInput(name, isCheck ? checked : value);
    };

    return { inputs, setInputs, inputChange };
};

export default useForm;
