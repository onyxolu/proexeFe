import React from "react";
import { FormGroup, Label } from "reactstrap";
import InputValidation from "../../../InputValidation/InputValidation";

const getInputProps = (required, formInfo, validationInfo) => {
  let { type, name, id } = formInfo;
  let inputProps = { type: type, id: id, name: name, required: required };

  if (validationInfo) {
    let { validations, validationErrorMessages } = validationInfo;
    // inputProps["required"] = true;
    inputProps["validations"] = validations;
    inputProps["validationError"] = validationErrorMessages;
  }
  return inputProps;
};

function AppInput(props) {
  const { isRequired, formInfo, validationInfo } = props.formData;
  const inputProps = getInputProps(isRequired, formInfo, validationInfo);
  return (
    <FormGroup>
      <Label for="name">{formInfo.labelName}</Label>
      <InputValidation {...inputProps} />
    </FormGroup>
  );
}

AppInput.propTypes = {};

export default AppInput;
