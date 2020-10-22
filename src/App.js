import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home.js";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
