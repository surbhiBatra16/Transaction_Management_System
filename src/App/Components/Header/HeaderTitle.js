import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setHeaderTitle } from "../../Store/Header/actionCreator";

export class componentName extends Component {
  static propTypes = {
    headerTitle: PropTypes.string.isRequired
  };
  componentDidMount = () => {
    this.props.setHeaderTitle(this.props.title);
  };

  render() {
    return <span />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setHeaderTitle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentName);
