import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import Exchange from "./Exchange/Exchange";
import News from "./News/News";
import App from "./App";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Exchange" component={Exchange} />
          <Route exact path="/News" component={News} />
          <Route exact path="/App" component={App} />
        </Switch>
      </Router>
    );
  }
}