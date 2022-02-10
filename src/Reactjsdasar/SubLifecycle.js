import React, { Component } from "react";

export default class SubLifecycle extends Component {
  componentWillUnmount() {
    this.props.ubahMakanan("sate");
  }

  render() {
    return (
      <div>
        <h2>Componene sub SubLifecycle</h2>
      </div>
    );
  }
}
