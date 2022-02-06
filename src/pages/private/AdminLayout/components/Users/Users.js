import React, { Component } from "react";
import AppDynamicTable from "../../../../../components/AppShared/AppDynamicTable/AppDynamicTable";
import { pageConfigs } from "../../../../../config";
import CreateandEditUsers from "./components/CreateandEditUsers";
import AdminService from "../../../../../services/admin";
import AppService from "../../../../../services/app";

export const AdminUsersTableCols = [
  {
    dataField: "id",
    dataType: "id",
    name: "ID",
    isKey: true,
    className: "width-50",
    columnClassName: "width-50",
  },
  {
    dataField: "name",
    dataType: "text",
    name: "Name",
    className: "width-50",
    columnClassName: "width-50",
  },
  {
    dataField: "username",
    dataType: "text",
    name: "Username",
    className: "width-50",
    columnClassName: "width-50",
  },
  {
    dataField: "email",
    dataType: "text",
    name: "Email",
    className: "width-50",
    columnClassName: "width-50",
  },

  {
    dataField: "city",
    dataType: "text",
    name: "City",
    className: "width-50",
    columnClassName: "width-50",
  },

  {
    dataField: "action",
    dataType: "action",
    name: "action",
    className: "width-50",
    columnClassName: "width-50",
  },
];

export default class Users extends Component {
  state = {
    isLoadingUsers: true,
    isDeletingUser: false,
    upsert_action: "create",
    currentUser: null,
    users: [],
    showModal: false,
  };

  toggle = (id) => {
    this.setState((prevState) => ({
      [id]: !prevState[id],
    }));
  };

  onCreateClick = () => {
    this.setState({
      upsert_action: "create",
      showModal: true,
      currentUser: null,
    });
  };

  deleteUser = async (id, close) => {
    console.log(id);
    this.setState({
      isDeletingUser: true,
      idToDelete: id,
    });
    try {
      const response = await AdminService.deleteUser(id);
      this.handleDelete(id, close);
    } catch (err) {
      AppService.errorToast("Sorry Something went wrong");
    }
    this.setState({
      isDeletingUser: false,
    });
  };

  handleDelete = (id, close) => {
    const idx = this.findIdx(id);
    const users = this.state.users;
    users.splice(idx, 1);
    this.setState({
      users: users,
    });
    // close();
  };

  findIdx = (id) => {
    const users = this.state.users;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        return i;
      }
    }
  };

  // id, name, username, email, city, edit , delete

  getUsers = async () => {
    this.setState({
      isLoadingUsers: true,
    });
    try {
      const response = await AdminService.getAllUsers();
      console.log(response.data);
      const users = this.formatUserdata(response.data);
      this.setState({
        users: users,
      });
    } catch (err) {
      AppService.handleError(err);
    }
    this.setState({
      isLoadingUsers: false,
    });
  };

  formatUserdata = (data) => {
    const users = [];
    data.map((user) => {
      users.push({
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        city: user.address.city,
      });
    });
    return users;
  };

  componentDidMount() {
    this.getUsers();
  }

  updateUser = (user, response) => {
    this.setState({
      showModal: false,
    });
    let users = this.state.users;
    console.log(user, "user", response);
    if (user["id"]) {
      const idx = this.findIdx(user.id);
      users[idx] = user;
    } else {
      user.id = response.id;
      users.push(user);
    }
    this.setState({
      users: users,
      showModal: false,
    });
  };

  onBackClick = () => {
    // this.getUsers();
  };

  onEditClick = (user) => {
    this.setState({
      upsert_action: "update",
      currentUser: user,
      showModal: true,
    });
  };

  render() {
    const userConfig = pageConfigs.admin.users;
    const title = userConfig.usersList;
    const createText = userConfig.create;
    const updateText = userConfig.update;
    const {
      upsert_action,
      isLoadingUsers,
      users,
      isDeletingUser,
      idToDelete,
      currentUser,
    } = this.state;

    return (
      <div>
        {this.state.showModal && (
          <CreateandEditUsers
            onBackClick={this.onBackClick}
            createText={createText}
            updateText={updateText}
            upsert_action={upsert_action}
            currentUser={currentUser}
            toggle={this.toggle}
            showModal={this.state.showModal}
            updateUser={this.updateUser}
          />
        )}
        <AppDynamicTable
          fetchingData={isLoadingUsers}
          onCreateClick={this.onCreateClick}
          title={title}
          data={users}
          tableCols={AdminUsersTableCols}
          createText={createText}
          isDeletingUser={isDeletingUser}
          idToDelete={idToDelete}
          deleteAction={this.deleteUser}
          onEditClick={this.onEditClick}
          actionConfig={{
            editAction: true,
            deleteAction: true,
          }}
        />
      </div>
    );
  }
}
