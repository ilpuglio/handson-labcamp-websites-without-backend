# "Building Simple Websites Without Backend" Labcamp

Demo for Reply Labcamp

## Hands on

### Fork the project

1. Fork the project into your GitHub account https://github.com/ilpuglio/handson-labcamp-websites-without-backend.git
2. Clone the project from your GitHub account `git clone https://github.com/XXX/handson-labcamp-websites-without-backend.git`
3. Checkout the branch related to your group (eg. group-1) `git checkout group-1`
4. run `npm install` and then `npm start` to run the project on localhost:3000
5. Setup Netlify account connecting it to your GitHub account

### TODO steps

- **Step 1**: Import "ProductsList", "AddProduct" and "NewProduct" components inside App.js
- **Step 2**: render ProductsList component inside the render function of App.js
- **Step 3**: bring to life the list of products inside ProductsList component (using state)
- **Step 4**: Import Firebase inside App.js and initialize it with this configuration

```
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
```

- **Step 5**: inside the componentDidMount function of ProductsList component, fetch data from Firebase and fill the state with the real data
- **Step 6**: render NewProduct component inside the render function of App.js
- **Step 7**: connect every input inside NewProduct component to the state using onChange prop
- **Step 8**: handle the click of the submit button of NewProduct component using onClick prop
- **Step 9**: push the new product from the state in Firebase using the set function on a ref of the database

### Are you ready to see your App automagically deployed in production? Push your changes to GitHub

- **Step 10**: render AddProduct component inside the render function of App.js
- **Step 11**: inside the componentDidMount function of AddProduct component, fetch data from Firebase and fill the state with the real data
- **Step 12**: pass the options from the state to the select component inside AddProduct and handle onChange event
- **Step 13**: handle the click of the submit button of AddProduct component using onClick prop
- **Step 14**: push the new quantity of the selected product from the state in Firebase using transactions on a ref of the database
