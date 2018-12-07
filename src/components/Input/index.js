import React, { Component } from "react";

class Input extends Component {
  handleChange = event => {
    const { onChange } = this.props;
    if (onChange) {
      const { name, value, type } = event.target;
      onChange(name, type === "number" ? parseInt(value) : value);
    }
  };

  render = () => {
    return (
      <input
        type={this.props.type}
        className="form-control"
        onChange={this.handleChange}
        value={this.props.value}
        name={this.props.name}
        placeholder={this.props.placeholder}
        min="0"
      />
    );
  };
}

export default Input;
