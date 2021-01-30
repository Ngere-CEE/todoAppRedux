import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <h3 className="text-primary">
                  Todo App Redux
        </h3>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={Dashboard} />
      </BrowserRouter>
      
    </>
  );
}

export default App;
