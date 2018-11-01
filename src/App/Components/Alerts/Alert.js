import React, { Component } from "react";
import { connect } from "react-redux";
class Alerts extends Component {
  render() {
    const { message, msgType } = this.props;
    return (
      message.length > 0 && (
        <div className={`alert alert-${msgType} alert-msg`} role="alert">
          {message}
        </div>
      )
    );
  }
}
const mapStateToProps = state => ({
  message: state.auth.msg,
  msgType: state.auth.msgType
});
export default connect(
  mapStateToProps,
  null
)(Alerts);
