import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { logout } from "../../../Store/Auth/actionCreator";

class Header extends Component {
  static propTypes = {
    headerTitle: PropTypes.string.isRequired
  };

  render() {
    const { headerTitle, appName, isAuthorized, userInfo } = this.props;
    return (
      <div className="header">
        <div className="app-title">
          {" "}
          {appName}
          <Helmet>
            <title>{headerTitle}</title>
          </Helmet>
        </div>

        <div>
          {isAuthorized && (
            <div className="user-action">
              <div className="user-info">
                <span className="glyphicon glyphicon-user" aria-hidden="true" />{" "}
                {userInfo.username}
              </div>
              <button className="btn btn-default" onClick={this.props.logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerTitle: state.header.title,
  appName: state.header.appName,
  isAuthorized: state.auth.isAuthorized,
  userInfo: state.auth.user
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
