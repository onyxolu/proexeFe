import React from "react";
import PropTypes from "prop-types";
import Formsy, { addValidationRule, withFormsy } from "formsy-react";

addValidationRule(
  "isRange",
  (values, value, array) => value >= array[0] && value <= array[1]
);

class InputValidation extends React.Component {
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
    errorMessage: PropTypes.string,
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

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    console.log(this.props.isFormSubmitted);
    const errorMessageObj =
      this.props.isFormSubmitted || this.props.trigger
        ? this.props.errorMessage
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
      <div className={this.props.className}>
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          className={"form-control"}
          onBlur={this.changeValue}
          onChange={this.changeValue}
          placeholder={this.props.placeholder}
          value={this.props.value || ""}
        />
        {required}
        {errorList}
      </div>
    );
  }
}

export default withFormsy(InputValidation);
