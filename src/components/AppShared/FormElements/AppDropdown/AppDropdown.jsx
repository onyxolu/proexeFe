import React from "react";
import { FormGroup, Label } from "reactstrap";
import DropdownValidation from "../../../DropdownValidation/DropdownValidation";

const getInputProps = (required, formInfo, validationInfo, options) => {
  let { type, name, id } = formInfo;
  let inputProps = {
    type: type,
    id: id,
    name: name,
    required: required,
    options: options,
  };

  if (validationInfo) {
    let { validations, validationErrorMessages } = validationInfo;
    // inputProps["required"] = true;
    inputProps["validations"] = validations;
    inputProps["validationError"] = validationErrorMessages;
  }
  return inputProps;
};

function AppDropdown(props) {
  const { isRequired, formInfo, options, validationInfo } = props.formData;
  const inputProps = getInputProps(
    isRequired,
    formInfo,
    validationInfo,
    options
  );
  const { id, labelName } = formInfo;
  return (
    <FormGroup>
      <Label for="credit-card-type">{labelName}</Label>
      <DropdownValidation {...inputProps} />
    </FormGroup>
  );
}

AppDropdown.propTypes = {};

export default AppDropdown;
