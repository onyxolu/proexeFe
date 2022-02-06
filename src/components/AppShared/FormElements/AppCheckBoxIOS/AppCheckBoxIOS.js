import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";
import InputValidation from "../../../InputValidation/InputValidation";
import CheckboxValidation from "../../../CheckboxValidation/CheckboxValidation";
import s from "./Elements.module.scss";

const getInputProps = (required, formInfo, validationInfo) => {
  let { type, name, className, labelName, id } = formInfo;
  let inputProps = {
    type: type,
    id: id,
    name: name,
    labelName: labelName,
    required: required,
    className: className,
  };

  if (validationInfo) {
    let { validations, validationErrorMessages } = validationInfo;
    // inputProps["required"] = true;
    inputProps["validations"] = validations;
    inputProps["validationError"] = validationErrorMessages;
  }
  return inputProps;
};

function AppCheckBoxIOS(props) {
  const { isRequired, formInfo, validationInfo } = props.formData;
  const inputProps = getInputProps(isRequired, formInfo, validationInfo);
  return (
    <div className={s.root}>
      <FormGroup className="display-inline-block checkbox-ios">
        <CheckboxValidation {...inputProps} />
      </FormGroup>
    </div>
  );
}

AppCheckBoxIOS.propTypes = {};

export default AppCheckBoxIOS;
