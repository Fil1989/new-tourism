import { createUseStyles } from "react-jss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import sendTourists from "../assets/sendTourists.png";
// import hostTourists from "../assets/hostTourists.png";

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

      "& a:hover": {
        textDecoration: "none",
      },
    },
  },
});

function HomePage() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <>
      <h1 className={classes.slogan}>Travel in future</h1>
      <div
        className={classes.container}
        aria-label="Sending or hosting tourists"
      >
        {isLoading ? (
          <Link
            to="/send"
            area-labelledby="send_tourists"
            className="main_button send"
          >
            <span id="send_tourists">If you SEND tourists, click here</span>
          </Link>
        ) : (
          <Link
            to="/send"
            area-labelledby="send_tourists"
            className="main_button send send_animation"
          >
            <span id="send_tourists">If you SEND tourists, click here</span>
          </Link>
        )}
        {isLoading ? (
          <Link
            to="/host"
            area-labelledby="host_tourists"
            className="main_button host"
          >
            <span id="host_tourists">If you HOST tourists, click here</span>
          </Link>
        ) : (
          <Link
            to="/host"
            area-labelledby="host_tourists"
            className="main_button host host_animation"
          >
            <span id="host_tourists">If you HOST tourists, click here</span>
          </Link>
        )}
      </div>
    </>
  );
}

export default HomePage;
