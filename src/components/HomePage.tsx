import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import sendTourists from "../assets/sendTourists.png";
import hostTourists from "../assets/hostTourists.png";

const useStyles = createUseStyles({
  slogan: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  "@media screen and (min-width: 481px)": {
    container: {
      flexDirection: "row",
    },
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.slogan}>Travel in future</h1>
      <div
        className={classes.container}
        aria-label="Sending or hosting tourists"
      >
        <Link to="/send">
          <button
            type="button"
            area-labelledby="send_tourists"
            className="main_button send"
          >
            <span id="send_tourists">If you SEND tourists, click here</span>
            <img src={sendTourists} alt="Send tourists" />
          </button>
        </Link>
        <Link to="/host">
          <button
            type="button"
            area-labelledby="host_tourists"
            className="main_button host"
          >
            <span id="host_tourists">If you HOST tourists, click here</span>
            <img src={hostTourists} alt="Send tourists" />
          </button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
