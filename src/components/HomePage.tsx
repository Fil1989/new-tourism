import { createUseStyles } from "react-jss";

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

  send: {
    backgroundColor: "blue",
  },
  host: {
    backgroundColor: "yellow",
  },
  main_button: {
    width: "90vw",
    height: "200px",
    border: "1px solid green",
    borderRadius: "10px",
    marginBottom: "20px",
  },

  "@media screen and (min-width: 481px)": {
    container: {
      flexDirection: "row",
      // padding: "0px 30px",
    },
    main_button: {
      width: "40vw",
      height: "35vw",
      marginLeft: "15px",
      marginRight: "15px",
    },
  },
  "@media screen and (min-width: 768px)": {
    container: {
      // padding: "0px 60px",
    },
    main_button: {
      height: "22vw",
      position: "relative",
      // marginLeft: "10px",
      // marginRight: "10px",
    },
  },
  "@media screen and (min-width: 1200px)": {
    container: {
      // padding: "0px 80px",
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
        <div area-labelledby="send_tourists" className={classes.main_button}>
          <span id="send_tourists">If you send tourists, click here</span>
        </div>
        <div area-labelledby="host_tourists" className={classes.main_button}>
          <span id="host_tourists">If you host tourists, click here</span>
        </div>
      </div>
    </>
  );
}

export default HomePage;
