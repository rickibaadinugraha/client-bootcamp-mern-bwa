import React from "react";
import TextInput from "../TextInput";
import { FormGroup } from "react-bootstrap";

function TextInputWithLabel({
  label,
  name,
  value,
  type,
  onChange,
  placeholder,
}) {
  return (
    <FormGroup>
      <label>{label}</label>
      <TextInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default TextInputWithLabel;
