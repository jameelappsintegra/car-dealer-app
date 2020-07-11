import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import CarList from "views/CarList/CarList.js";
import CarDetails from "views/CarDetails/CarDetails.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();
const client = new ApolloClient({
  uri: "https://evident-rooster-66.hasura.app/v1/graphql",
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": "eaeabtcoqbkmhbmqkxmydcjtxwkltfok",
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/car-list" component={CarList} />
        <Route path="/car-details" component={CarDetails} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
