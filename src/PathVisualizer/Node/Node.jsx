import React, { Component } from "react";
import "./Node.css";

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    const className = this.state.clicked ? "click-state node" : "node";

    return <div className={className} onClick={this.handleClick}></div>;
  }
}

export default Node;
