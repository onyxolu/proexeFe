import React from "react";
import { FormGroup, Label } from "reactstrap";
import s from "../Form.module.scss";
import TextAreaValidation from "../../../TextAreaValidation/TextAreaValidation";

const getInputProps = (required, formInfo, validationInfo) => {
  let { type, name, id } = formInfo;
  let inputProps = {
    type: type,
    id: id,
    name: name,
    required: required,
    className: `form-control ${s.autogrow} transition-height input-transparent`,
  };

  if (validationInfo) {
    let { validations, validationErrorMessages } = validationInfo;
    // inputProps["required"] = true;
    inputProps["validations"] = validations;
    inputProps["validationError"] = validationErrorMessages;
  }
  return inputProps;
};

function AppTextarea(props) {
  const { isRequired, formInfo, validationInfo } = props.formData;
  const inputProps = getInputProps(isRequired, formInfo, validationInfo);
  const { id, labelName } = formInfo;
  return (
    <FormGroup>
      <Label for="elastic-textarea">{labelName}</Label>
      <TextAreaValidation {...inputProps} />
    </FormGroup>
  );
}

AppTextarea.propTypes = {};

export default AppTextarea;
