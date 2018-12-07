import React, { Component } from "react";

class Select extends Component {
  handleChange = event => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(event.target.value);
    }
  };

  render = () => {
    const { options, value } = this.props;

    return (
      <select
        className="custom-select"
        value={value}
        onChange={this.handleChange}
      >
        <option value="" disabled>
          Seleziona un prodotto
        </option>
        {options.map((element, index) => {
          return (
            <option key={index} value={element.id}>
              {element.name}
            </option>
          );
        })}
      </select>
    );
  };
}

export default Select;
