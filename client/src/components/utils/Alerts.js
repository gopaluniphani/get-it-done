import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alerts extends Component {
  componentDidUpdate = (prevProps) => {
    const { errors, alert, messages } = this.props;
    if (errors !== prevProps.errors) {
      if (errors.msg) alert.error(errors.msg);
    }

    if (messages !== prevProps.messages) {
      if (messages.registered) alert.success(messages.registered);
    }
  };

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  messages: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
