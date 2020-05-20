import React from "react";
import { FormFeedback, FormText, Label, Input as _Input } from "reactstrap";

const Input = ({ name, inputs, inputChange, help, validator }) => {
    return (
        <>
            <Label for={name}>
                {`${name[0].toUpperCase()}${name.substr(1)}`.replace("_", " ")}
            </Label>
            <_Input
                id={name}
                name={name}
                value={inputs[name] || ""}
                onChange={inputChange}
                invalid={validator[name].isInvalid}
            />
            <FormFeedback>{validator[name].message}</FormFeedback>
            {help && <FormText>{help}</FormText>}
        </>
    );
};

export default Input;
