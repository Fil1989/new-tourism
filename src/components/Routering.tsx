import { Route, Switch } from "react-router-dom";
import Registration from "./Registration";
import HomePage from "./HomePage";
import About from "./About";
import Contacts from "./Contacts";
import HowToSend from "./HowToSend";
import HowToHost from "./HowToHost";
import Login from "./Login";
import WrongWay from "./WrongWay";

function Routering() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/login" exact component={Login} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/howsend" component={HowToSend} />
      <Route path="/howhost" component={HowToHost} />
      <Route component={WrongWay} />
    </Switch>
  );
}

export default Routering;
