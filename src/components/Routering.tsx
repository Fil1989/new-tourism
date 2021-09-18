import { Route, Switch } from "react-router-dom";
import Registration from "./Registration";
import HomePage from "./HomePage";
import Login from "./Login";
import WrongWay from "./WrongWay";

function Routering() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/login" exact component={Login} />
      <Route component={WrongWay} />
    </Switch>
  );
}

export default Routering;
