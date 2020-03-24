import React from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import SignIn_SignUp from "../src/pages/SignIn_SignUp/SignIn_SigUp.jsx";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn_SignUp} />
      </Switch>
    </div>
  );
}

export default App;
