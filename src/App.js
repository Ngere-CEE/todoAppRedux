import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
