import React, { Component } from "react";
import * as firebase from "firebase";

import Input from "../Input";

class NewProduct extends Component {
  constructor() {
    super();

    this.state = {
      productName: "",
      productQnt: 0
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmitClick = () => {
    const { productName, productQnt } = this.state;

    const newPostRef = firebase.database().ref(`/master`).push();

    newPostRef.set({
      name: productName,
      count: productQnt
    });
  };

  render = () => {
    const { productName, productQnt } = this.state;

    return (
      <div className="card">
        <div className="card-header">New product</div>
        <div className="card-body">
          <div className="form-inline">
            <div className="form-group">
              <Input
                name="productName"
                type="text"
                onChange={this.handleInputChange}
                value={productName}
                placeholder="Nome del prodotto"
              />
            </div>
            <div className="form-group mx-sm-3">
              <Input
                name="productQnt"
                type="number"
                onChange={this.handleInputChange}
                value={productQnt}
                placeholder="Quantità"
              />
            </div>
            <button
              className="btn btn-primary"
              disabled={productName === "" || productQnt === 0}
              onClick={this.handleSubmitClick}
            >
              Add product
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default NewProduct;
