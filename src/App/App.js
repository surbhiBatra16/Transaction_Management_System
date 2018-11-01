import React, { Component } from "react";
import "../Styles/bootstrap.css";
import "../Styles/index.css";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Header from "../App/Components/Header/Header";
import UserForm from "./Components/Auth/UserForm";
import Alerts from "./Components/Alerts/Alert";
import MailPopU from "./Components/Modal/Modal";
class App extends Component {
  render() {
    return (
      <div className="theme">
        <Header />
        <div className="app-components container">
          <Alerts />
          <MailPopU />
          {!this.props.isAuthorized ? (
            <UserForm />
          ) : (
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized
});
export default connect(
  mapStateToProps,
  null
)(withRouter(App));
