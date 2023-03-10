import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/login";
import ReactDOM from "react-dom";
import Signup from "./pages/sign-up/sign-up";
import Dashboard from "./pages/dashboard/dashboard";
import Container from "./pages/container/container";
import useRouteElement from "./useRouterElement";

function App() {
    const routeElements = useRouteElement()
  return (
    <div className="App">
      {routeElements}
    </div>
  );
}

export default App;
