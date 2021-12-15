import { BrowserRouter as Router, Route } from "react-router-dom";
import { React, Switch } from "react";
import Home from "./Home";
import Room from "./Room";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/room" component={Room} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}
