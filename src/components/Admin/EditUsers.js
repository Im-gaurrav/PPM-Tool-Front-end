import React, { Component } from "react";
import ApiService from "../../service/ApiService";

class EditUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
      //   salary: "",
    };
    this.saveUser = this.saveUser.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    ApiService.fetchUserById(window.localStorage.getItem("userId")).then(
      (res) => {
        let user = res.data.result;
        this.setState({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          //   age: user.age,
          //   salary: user.salary,
        });
      }
    );
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveUser = (e) => {
    e.preventDefault();
    let user = {
      id: this.state.id,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      //   age: this.state.age,
      //   salary: this.state.salary,
    };
    ApiService.editUser(user).then((res) => {
      this.setState({ message: "User added successfully." });
      this.props.history.push("/users");
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Edit User</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="User Name"
              name="name"
              className="form-control"
              readonly="true"
              defaultValue={this.state.name}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              placeholder="First Name"
              name="email"
              className="form-control"
              //   readonly="true"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              placeholder="Password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Role:</label>
            <input
              type="number"
              placeholder="User Role"
              name="role"
              className="form-control"
              value={this.state.role}
              onChange={this.onChange}
            />
          </div>

          <button className="btn btn-success" onClick={this.saveUser}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EditUserComponent;
