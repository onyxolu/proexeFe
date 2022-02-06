import React, { Component } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import Formsy from "formsy-react";

import AppInput from "../../../../../../components/AppShared/FormElements/AppInput/AppInput";
import AdminService from "../../../../../../services/admin";
import AppService from "../../../../../../services/app";

const nameFormConfig = {
  formInfo: {
    type: "name",
    labelName: "Name",
    name: "name",
    id: "name",
  },
  isRequired: true,
};

const emailFormConfig = {
  formInfo: {
    type: "email",
    labelName: "Email",
    name: "email",
    id: "email",
  },
  isRequired: true,
};

export default class CreateandEditUsers extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.userForm = React.createRef();
  }
  state = {
    isDatePickerOpen: false,
    imageFiles: [],
    isLoading: false,
    currentUser: {},
  };

  upsertUser = async (user) => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await AdminService.upsertUser(user);
      let message = `User Successfully ${
        this.props.upsert_action === "update" ? "Updated" : "Created"
      }`;
      let userData = user;
      if (this.props.upsert_action === "update") {
        userData = this.updateCurrentUser(user);
      }
      this.props.updateUser(userData, response.data);
      AppService.successToast(message);
    } catch (err) {
      AppService.errorToast("Sorry Something went wrong");
    }
    this.setState({
      isLoading: false,
    });
  };

  updateCurrentUser = (user) => {
    const currentUser = this.state.currentUser;
    const { email, name } = user;
    currentUser.email = email;
    currentUser.name = name;
    return currentUser;
  };

  submit = (data) => {
    this.upsertUser(data);
  };

  onSubmit = (data) => {
    console.log(data);
  };

  updateValue = (currentUser) => {
    this.userForm.current.updateInputsWithValue(currentUser, true);
  };

  componentDidMount() {
    const { currentUser, upsert_action } = this.props;
    if (upsert_action === "update") {
      setTimeout(() => {
        this.updateValue(currentUser);
      }, 100);
      this.setState({
        currentUser: currentUser,
      });
    }
  }

  render() {
    const { upsert_action } = this.props;
    return (
      <div>
        <Modal
          isOpen={this.props.showModal}
          toggle={() => this.props.toggle("showModal")}
        >
          <ModalHeader toggle={() => this.props.toggle("showModal")}>
            {`${upsert_action === "update" ? "Update" : "Create"} User`}
          </ModalHeader>
          <ModalBody>
            <Formsy onValidSubmit={this.submit} ref={this.userForm}>
              <fieldset>
                <Row>
                  <Col md="12">
                    <AppInput formData={nameFormConfig} />
                  </Col>
                  <Col md="12">
                    <AppInput formData={emailFormConfig} />
                  </Col>
                </Row>
              </fieldset>

              <div className="form-action bg-widget-transparent">
                <Button
                  type="submit"
                  color="danger"
                  className="btn-rounded float-right"
                >
                  Validate & Submit
                  {this.state.isLoading ? (
                    <i className="fa fa-spinner fa-spin" />
                  ) : (
                    ""
                  )}
                </Button>
                <Button
                  onClick={() => this.props.toggle("showModal")}
                  type="button"
                  color="default"
                  className="btn-rounded"
                >
                  Cancel
                </Button>
              </div>
            </Formsy>
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              onClick={() => this.props.toggle("showModal")}
            >
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
