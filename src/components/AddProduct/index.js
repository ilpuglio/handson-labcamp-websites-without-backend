import React, { Component } from "react";

import Select from "../Select";
class AddProduct extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      selectedOption: ""
    };
  }

  componentDidMount = () => {
    // TODO step 11 - fetch data from Firebase
  };

  handleSelectChange = selectedOption => {
    this.setState({
      selectedOption
    });
  };

  handleSubmitClick = async () => {
    /* TODO - step 14: push data in Firebase db using transactions */
  };

  render = () => {
    return (
      <div className="card">
        <div className="card-header">Add one product</div>
        <div className="card-body">
          <div className="input-group">
            {/* TODO step 12 - pass the options from the state to this select and handle onChange event */}
            <Select
              value={this.state.selectedOption}
              options={["aaa", "bbb"]}
            />
            <div className="input-group-append">
              {/* TODO - step 13: handle onClick of this button */}
              <button
                className="btn btn-primary"
                disabled={this.state.selectedOption === ""}
              >
                Aggiungi prodotto
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default AddProduct;
