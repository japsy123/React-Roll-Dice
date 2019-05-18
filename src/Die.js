import React from "react";

export default class Die extends React.Component {
  render() {
    return <i className={`fas fa-dice-${this.props.face} fa-9x`} />;
  }
}
