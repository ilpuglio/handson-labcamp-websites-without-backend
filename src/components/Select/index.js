import React, { Component } from "react";

class Select extends Component {
  handleChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
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
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    );
  };
}

export default Select;
