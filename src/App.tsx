// import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

import Routering from "./components/Routering";
import logo from "./assets/logo.jpg";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    border: "solid 1px green",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <NavLink to="/" exact className="logo" activeClassName="active-link">
          <img src={logo} alt="Tourism in future" />
        </NavLink>
        <div className="auth_menu">
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </header>
      <Routering />
    </>
  );
}

export default App;
