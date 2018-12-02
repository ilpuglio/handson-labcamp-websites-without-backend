import React, { Component } from "react";

class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
      products: {}
    };
  }

  componentDidMount = () => {
    // TODO step 5 - fetch data from Firebase
  };

  render = () => {
    return (
      <div className="card">
        <div className="card-header">Product List</div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">
              Product 1
              <span className="badge badge-pill badge-success">10</span>
            </li>
            <li className="list-group-item">
              Product 2
              <span className="badge badge-pill badge-success">20</span>
            </li>
            {/* TODO step 3 - bring to life this list dynamic (using state) */}
          </ul>
        </div>
      </div>
    );
  };
}

export default ProductsList;
