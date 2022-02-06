import React from "react";
import PropTypes from "prop-types";
import Formsy, { addValidationRule, withFormsy } from "formsy-react";
import { Input, Label } from "reactstrap";

addValidationRule(
  "isRange",
  (values, value, array) => value >= array[0] && value <= array[1]
);

class CheckboxValidation extends React.Component {
  /* eslint-disable */
  static propTypes = {
    trigger: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    setValue: PropTypes.func,
    isFormSubmitted: PropTypes.bool,
    getErrorMessage: PropTypes.string,
    showRequired: PropTypes.bool,
  };
  /* eslint-enable */

  static defaultProps = {
    trigger: null,
    type: "text",
    className: "",
    name: "",
    id: "",
    placeholder: "",
  };

  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event, data) {
    console.log(event.value, data);
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessageObj =
      this.props.isFormSubmitted || this.props.trigger
        ? this.props.getErrorMessage
        : null;

    const required =
      this.props.isFormSubmitted && this.props.showRequired ? (
        <span className={"help-block text-danger"}>
          This value is required.
        </span>
      ) : null;

    const errorMsg = [];
    if (errorMessageObj) {
      Object.keys(errorMessageObj).forEach((type) => {
        errorMsg.push(errorMessageObj[type]);
      });
    }
    const errorList = errorMsg.map((msg, index) => (
      <span
        key={`msg-err-${index.toString()}`}
        className={"help-block text-danger"}
      >
        {msg}
      </span>
    ));

    return (
      <>
        {/* <Input
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          className={"ios"}
          onBlur={this.changeValue}
          placeholder={this.props.placeholder}
        /> */}
        <Label for="name">{this.props.labelName}</Label>
        <Label for={this.props.id} className="switch">
          <Input
            type="checkbox"
            className="ios"
            name={this.props.name}
            // onBlur={this.changeValue}
            onChange={this.changeValue}
            defaultChecked
            id={this.props.id}
            value={this.props.value || ""}
          />
          <i />
        </Label>

        {/* {required}
        {errorList} */}
      </>
    );
  }
}

export default withFormsy(CheckboxValidation);
