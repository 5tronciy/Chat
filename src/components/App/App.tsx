import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createMemoryHistory } from "history";
import HomePage from "./../../route/HomePage/HomePage";

export const App = () => {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
