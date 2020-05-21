import React from "react";
import { FormFeedback, FormText, Label, Input } from "reactstrap";

const _Input = ({ name, inputs, inputChange, help, validator, type }) => {
    return (
        <>
            <Label for={name}>
                {`${name[0].toUpperCase()}${name.substr(1)}`.replace("_", " ")}
            </Label>
            <Input
                id={name}
                name={name}
                type={type || "text"}
                value={inputs[name] || ""}
                onChange={inputChange}
                invalid={validator[name].isInvalid}
            />
            <FormFeedback>{validator[name].message}</FormFeedback>
            {help && <FormText>{help}</FormText>}
        </>
    );
};

export default _Input;
