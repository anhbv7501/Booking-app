import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./views/homePage/HomePage";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";
import ProductBox from "./container/product/ProductBox";
import ProductIndex from "./container/product/ProductIndex";
import ProductTable from "./container/product/ProductTable";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/landing" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/product" component={ProductBox} />
        <Route path="/productIndex" component={ProductIndex} />
        <Route path="/productTable" component={ProductTable} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
