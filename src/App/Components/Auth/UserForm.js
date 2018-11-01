import React, { Component } from "react";
import { connect } from "react-redux";
import {
  autheriseUser,
  getAutherisedUser,
  addNewUser
} from "../../../Store/Auth/actionCreator";

class Login extends Component {
  state = {
    user: {
      username: "",
      password: "",
      role: "user"
    },
    isSignUp: false
  };
  submitForm = () => {
    this.state.isSignUp
      ? this.props.addNewUser(this.state.user)
      : this.props.autheriseUser({
          username: this.state.user.username,
          password: this.state.user.password
        });
  };
  handleChange = e => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  componentDidMount() {
    this.props.getAutherisedUser();
  }
  signUpForm = () => {
    this.setState({
      isSignUp: !this.state.isSignUp,
      user: {
        username: "",
        password: "",
        role: "user"
      }
    });
  };

  render() {
    const { user, isSignUp } = this.state;
    const { username, password, role } = user;
    const { signUpSuccess } = this.props;

    if (signUpSuccess && isSignUp) {
      this.setState({
        isSignUp: false,
        user: {
          username: "",
          password: "",
          role: "user"
        }
      });
    }
    return (
      <div className="form">
        <div className="heading">User {isSignUp ? " SignUp" : "Login"}</div>
        <div className="content">
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => this.handleChange(e)}
            />
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                className="form-control"
                id="role"
                value={role}
                name="role"
                onChange={e => this.handleChange(e)}
              >
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
            </div>
          )}
          <div className="action-button">
            <button onClick={this.submitForm}>
              {isSignUp ? "SignUp" : "Login"}
            </button>
            <div>OR</div>
            <button onClick={() => this.signUpForm()}>
              {!isSignUp ? "SignUp" : "Login"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  autheriseUser,
  getAutherisedUser,
  addNewUser
};
const mapStateToProps = state => ({
  signUpSuccess: state.auth.signup
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
