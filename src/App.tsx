// import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

import Routering from "./components/Routering";
import logo from "./assets/FuTourism.jpg";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    boxShadow: "0 1px 1px gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  logo: {
    width: "300px",
  },
  auth: {
    margin: "0 10px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <NavLink to="/" exact className="logo" activeClassName="active-link">
          <img src={logo} alt="Tourism in future" className={classes.logo} />
        </NavLink>
        <div className="auth_menu">
          <NavLink to="/registration" className={classes.auth}>
            Registration
          </NavLink>
          <NavLink to="/login" className={classes.auth}>
            Login
          </NavLink>
        </div>
      </header>

      <Routering />
    </>
  );
}

export default App;
