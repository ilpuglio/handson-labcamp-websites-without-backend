import React, { Component } from "react";
import * as firebase from "firebase";

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
    const rootRef = firebase.database().ref("/master");
    rootRef.on("value", snapshot => {
      const products = []
      for (let key in snapshot.val()) {
        products.push(key)
      }
      this.setState({
        products,
        productsObj: snapshot.val()
      });
    });
  };

  handleSelectChange = selectedOption => {
    this.setState({
      selectedOption
    });
  };

  handleSubmitClick = () => {
    const ref = firebase.database().ref(`/master/${this.state.selectedOption}/count`);

    ref.transaction(currentCount => {
      return currentCount + 1;
    });
  };

  render = () => {
    const { products, productsObj, selectedOption } = this.state;

    return (
      <div className="card">
        <div className="card-header">Add one quantity to a product</div>
        <div className="card-body">
          <div className="input-group">
            <Select
              value={selectedOption}
              onChange={this.handleSelectChange}
              options={products.map(productId => ({
                  id: productId,
                  name: productsObj[productId].name
                })
              )}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                disabled={selectedOption === ""}
                onClick={this.handleSubmitClick}
              >
                Add quantity
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default AddProduct;
