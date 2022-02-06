import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import actions from '../../../actions/usersListActions';
import {
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import {   Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';

import Widget from "../../Widget/Widget";
import Loader from "../../Loader/Loader";

// import {
//   getProductsRequest,
//   deleteProductRequest,
// } from "../../../actions/products";

import s from "./AppDynamicTable.module.scss";
import Badge from "reactstrap/lib/Badge";

class AppDynamicTable extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    products: [],
  };

  state = {
    popovers: {},
    promoAlert: false,
    modalOpen: false,
    idToDelete: null,
  };

  constructor() {
    super();
    this.apiFormatter = this.apiFormatter.bind(this);
  }

  componentDidMount() {
    // this.props.dispatch(getProductsRequest());
    setTimeout(() => {
      this.showPromoAlert();
    }, 100);
  }

  showPromoAlert() {
    this.setState({ promoAlert: true });
  }

  imageFormatter(cell) {
    return <img src={cell} alt="..." className={s.image} title="image" />;
  }

  ratingFormatter(cell) {
    //   return <Rating rating={parseFloat(cell)} />;
  }

  priceFormatter = (cell) => {
    return <span className="text-success">{cell}</span>;
  };

  titleFormatter(cell, row) {
    return cell ? (
      <Link className="text-primary" to={"/app/ecommerce/product/" + row.id}>
        {cell[0].toUpperCase() + cell.slice(1)}
      </Link>
    ) : (
      ""
    );
  }

  textFormater(text) {
    return (
      <small>
        <span className="text-muted fw-semi-bold">&nbsp; {text}</span>
      </small>
    );
  }

  statusFormatter(status) {
    let color = "";
    const danger_status = [
      "DEACTIVATED",
      "DECLINED",
      "SUSPENDED",
      "INVALIDATED",
    ];
    const primary_status = [
      "PROCESSED",
      "SUBMITTED",
      "ACTIVE",
      "PENDING",
      "MODIFIED",
      "AWAITING_PAY",
    ];
    const secondary_status = ["NEW", "REVIEW"];
    const success_status = ["PAID", "APPROVED"];
    const warning_status = ["INVALIDATED"];

    if (danger_status.includes(status)) color = "danger";
    if (primary_status.includes(status)) color = "primary";
    if (secondary_status.includes(status)) color = "secondary";
    if (success_status.includes(status)) color = "success";
    if (warning_status.includes(status)) color = "warning";

    if (status === true) {
      color = "primary";
      return <Badge color={color}>{"ACTIVE"}</Badge>;
    }

    if (status === false) {
      color = "danger";
      return <Badge color={color}>{"INACTIVE"}</Badge>;
    }

    return <Badge color={color}>{status}</Badge>;
  }

  deleteProduct(id) {
    // this.props.dispatch(
    //   deleteProductRequest({
    //     id,
    //     history: this.props.history,
    //   })
    // );
  }

  togglePopover(id) {
    let newState = { ...this.state };
    if (!this.state.popovers[id]) {
      newState.popovers[id] = true;
    } else {
      newState.popovers[id] = !newState.popovers[id];
    }
    this.setState(newState);
  }

  openModal(cell) {
    const userId = cell;
    this.props.dispatch(actions.doOpenConfirm(userId));
  }

  handleDelete() {
    const userId = this.props.idToDelete;
    // this.props.dispatch(actions.doDelete(userId));
    this.props.deleteAction(userId, this.closeModal());
  }

  closeModal() {
    this.props.dispatch(actions.doCloseConfirm());
  }

  apiFormatter(cell, row) {
    const { editAction, deleteAction, otherAction } = this.props.actionConfig;
    return (
      <ButtonToolbar>
        {otherAction && (
          <Button
            color="primary"
            size="xs"
            onClick={() => this.props.onEditClick(row)}
          >
            <span className="d-none d-md-inline-block">{otherAction.name}</span>
            <span className="d-md-none">
              <i className="la la-edit" />
            </span>
          </Button>
        )}
        {editAction && (
          <Button
            color="primary"
            size="xs"
            onClick={() => this.props.onEditClick(row)}
          >
            <span className="d-none d-md-inline-block">Edit</span>
            <span className="d-md-none">
              <i className="la la-edit" />
            </span>
          </Button>
        )}
        {deleteAction && (
          <Button
            id={"popoverDelete_" + row.id}
            color="danger"
            size="xs"
            onClick={() => this.openModal(row.id)}
            // onClick={() => this.props.deleteAction(row.id)}
          >
            {this.props.isDeletingUser && this.props.idToDelete === row.id ? (
              <Loader size={14} />
            ) : (
              <span>
                <span className="d-none d-md-inline-block">Delete</span>
                <span className="d-md-none">
                  <i className="la la-remove" />
                </span>
              </span>
            )}
          </Button>
        )}

        {/* <Popover
          className="popover-danger"
          target={"popoverDelete_" + row.id}
          placement="top"
          isOpen={this.state.popovers[row.id]}
          toggle={() => {
            this.togglePopover(row.id);
          }}
        >
          <PopoverHeader className="px-5">Are you sure?</PopoverHeader>
          <PopoverBody className="px-5 d-flex justify-content-center">
            <ButtonToolbar>
              <Button
                color="success"
                size="xs"
                onClick={() => {
                  this.props.deleteUser(row.id);
                }}
              >
                Yes
              </Button>
              <Button
                color="danger"
                size="xs"
                onClick={() => {
                  this.togglePopover(row.id);
                }}
              >
                No
              </Button>
            </ButtonToolbar>
          </PopoverBody>
        </Popover> */}
      </ButtonToolbar>
    );
  }

  renderSizePerPageDropDown = (props) => {
    const limits = [];
    props.sizePerPageList.forEach((limit) => {
      limits.push(
        <DropdownItem
          key={limit}
          onClick={() => props.changeSizePerPage(limit)}
        >
          {limit}
        </DropdownItem>
      );
    });

    return (
      <Dropdown isOpen={props.open} toggle={props.toggleDropDown}>
        <DropdownToggle color="subtle-blue" caret>
          {props.currSizePerPage}
        </DropdownToggle>
        <DropdownMenu>{limits}</DropdownMenu>
      </Dropdown>
    );
  };

  createNewProduct() {
    this.props.onCreateClick();
  }

  renderTableCol(col, id) {
    let columnProps = {};

    switch (col.dataType) {
      case "id":
        columnProps = {
          isKey: col.isKey,
          className: col.className,
          columnClassName: col.columnClassName,
        };
        break;
      case "status":
        columnProps = {
          dataFormat: this.statusFormatter,
        };
        break;
      case "action":
        columnProps = {
          dataFormat: this.apiFormatter,
        };
        break;
      case "subtitle":
        columnProps = {
          dataFormat: this.textFormater,
        };
        break;

      default:
        columnProps = {
          dataFormat: this.textFormater,
        };
        break;
    }

    columnProps["key"] = id;
    columnProps["dataField"] = col.dataField;
    return (
      <TableHeaderColumn {...columnProps}>
        <span className="fs-sm">{col.name}</span>
      </TableHeaderColumn>
    );
  }

  render() {
    const options = {
      sizePerPage: 10,
      paginationSize: 3,
      sizePerPageDropDown: this.renderSizePerPageDropDown,
    };

    const { title, data, tableCols, createText, fetchingData } = this.props;

    return (
      <div>
        {/* <div className="page-top-line">
          <h2 className="page-title">
            Product - <span className="fw-semi-bold">Management</span>
          </h2>
          <Alert
            color="success"
            className={cx(s.promoAlert, {
              [s.showAlert]: this.state.promoAlert,
            })}
          >
            This page is only available in{" "}
            <a
              className="text-white font-weight-bold"
              rel="noreferrer noopener"
              href="https://flatlogic.com/admin-dashboards/light-blue-react-node-js"
              target="_blank"
            >
              Light Blue React with Node.js
            </a>{" "}
            integration!
          </Alert>
        </div> */}
        <Widget
          title={title}
          className="overflow-auto"
          fetchingData={fetchingData}
        >
          <Button color="success" onClick={() => this.createNewProduct()}>
            {createText}
          </Button>
          <BootstrapTable
            className="table-responsive"
            data={data}
            version="4"
            pagination
            options={options}
            search
            tableContainerClass={`table-striped ${s.bootstrapTable}`}
          >
            {tableCols.map((col, id) => this.renderTableCol(col, id))}
          </BootstrapTable>
          <Modal size="sm" isOpen={this.props.modalOpen} toggle={() => this.closeModal()}>
            <ModalHeader toggle={() => this.closeModal()}>Confirm delete</ModalHeader>
            <ModalBody>
              Are you sure you want to delete this item?
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => this.closeModal()}>Cancel</Button>
              <Button color="primary" onClick={() => this.handleDelete()}>Delete</Button>
            </ModalFooter>
          </Modal>
        </Widget>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.users.list.modalOpen,
    idToDelete: state.users.list.idToDelete,
  };
}

export default withRouter(connect(mapStateToProps)(AppDynamicTable));
