import React, { Component } from "react";
import * as firebase from "firebase";

class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount = () => {
    const rootRef = firebase.database().ref("/master");

    rootRef.on("value", snapshot => {

      const products = []
      for (let key in snapshot.val()) {
        products.push(snapshot.val()[key])
      }

      this.setState({
        products
      });
    
    });

  };

  render = () => {
    const { products } = this.state;

    return (
      <div className="card">
        <div className="card-header">Product List</div>
        <div className="card-body">
          <ul className="list-group">
            {products.map((product, index) => 
              (
                <li className="list-group-item" key={index}>
                  {product.name}{" "}
                  <span className="badge badge-pill badge-success">
                    {product.count}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  };
}

export default ProductsList;
