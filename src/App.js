import React, { Component } from "react";
import * as firebase from "firebase";
import "bootstrap";

import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import NewProduct from "./components/NewProduct";

import "./App.css";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD-9xGzU36RhkNmg6B_NW0hMWS3egw_T3o",
  authDomain: "labcamp-sites-without-backend.firebaseapp.com",
  databaseURL: "https://labcamp-sites-without-backend.firebaseio.com",
  projectId: "labcamp-sites-without-backend",
  storageBucket: "labcamp-sites-without-backend.appspot.com",
  messagingSenderId: "985712486505"
};
firebase.initializeApp(config);

class App extends Component {
  render = () => {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-5">
              Building simple Websites without backend
            </h1>
            <p className="lead">
              This will be your playground for the hands on part of this labcamp.
            </p>
          </div>
        </div>
        <ProductsList />
        <hr />
        <AddProduct />
        <hr />
        <NewProduct />
      </div>
    );
  };
}

export default App;
