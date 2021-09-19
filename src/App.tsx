// import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

import Routering from "./components/Routering";
import logo from "./assets/FuTourism1.jpg";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    boxShadow: "0 1px 1px rgba(128,128,128,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer_nav: {
    display: "block",
    width: "40vw",
    textAlign: "center",
    // marginBottom: "10px",
    marginTop: "10px",
  },

  "@media screen and (min-width: 768px)": {
    footer_nav: {
      width: "20vw",
    },
  },

  "@media screen and (max-width: 520px)": {
    header: {
      justifyContent: "space-around",
    },
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
      <main>
        <Routering />
      </main>
      <footer>
        <nav aria-label="Navigation" className={classes.nav}>
          <NavLink to="/about" className={classes.footer_nav}>
            About us
          </NavLink>
          <NavLink to="/contacts" className={classes.footer_nav}>
            Contacts
          </NavLink>
          <NavLink to="/howsend" className={classes.footer_nav}>
            How to send?
          </NavLink>
          <NavLink to="/howhost" className={classes.footer_nav}>
            How to host?
          </NavLink>
        </nav>
      </footer>
    </>
  );
}

export default App;
