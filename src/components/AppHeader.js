import React, { Component } from "react";
import './AppHeader.css';
class AppHeader extends Component {
  color(color) {
    return `top-header ${color}`
  }  
  render() {
    return (
      <div className={this.color(this.props.header.color)}>
        {this.props.header.title}
    </div>
    );
  }
}

export default AppHeader;
