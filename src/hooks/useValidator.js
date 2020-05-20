import { useState } from "react";
import FormValidator from "../utils/FormValidator";

const useValidator = (rules, inputs) => {
    const [submited, isSubmited] = useState(false);

    const formValidator = new FormValidator(rules);

    const isValid = formValidator.validate(inputs).isValid;

    const validator = submited
        ? formValidator.validate(inputs)
        : formValidator.valid();

    return { isValid, validator, isSubmited };
};

export default useValidator;
