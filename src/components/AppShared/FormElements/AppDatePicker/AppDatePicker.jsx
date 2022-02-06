import React from "react";
import { FormGroup, Label } from "reactstrap";
import Datetime from "react-datetime";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";

function AppDatePicker(props) {
  const { isRequired, formInfo } = props.formData;
  const { labelName, viewMode, timeFormat } = formInfo;
  return (
    <FormGroup>
      <Label for="expiration-data">{labelName}</Label>
      <div className="datepicker" style={{ display: "flex" }}>
        <Datetime id="datepicker" viewMode={viewMode} timeFormat={timeFormat} />
        <InputGroupAddon addonType="append">
          <span className="input-group-text">
            <i className="glyphicon glyphicon-th" />
          </span>
        </InputGroupAddon>
      </div>
    </FormGroup>
  );
}

AppDatePicker.propTypes = {};

export default AppDatePicker;
