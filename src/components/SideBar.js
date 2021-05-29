import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const useStyles = makeStyles({
  paper_step: {
    backgroundColor: "#fff",
    opacity: 0.7,
    height: "3px",
    width: "18%",
    padding: 0,
  },
});

const SideBar = () => {
  const classes = useStyles();
  return (
    <Hidden mdDown>
      <Grid
        item
        container
        style={{
          backgroundColor: "#7E51FF",
          maxWidth: "300px",
          padding: "32px",
        }}
        justify="center"
        md={3}
      >
        <Grid
          container
          direction="column"
          style={{ width: "90%", color: "#fff" }}
        >
          <Logo style={{ marginBottom: "32px" }} />

          <Grid
            style={{ marginBottom: "32px" }}
            container
            justify="space-between"
            wrap="nowrap"
          >
            <Grid
              style={{ opacity: 1 }}
              item
              className={classes.paper_step}
            ></Grid>
            <Grid item className={classes.paper_step}></Grid>
            <Grid item className={classes.paper_step}></Grid>
            <Grid item className={classes.paper_step}></Grid>
            <Grid item className={classes.paper_step}></Grid>
          </Grid>
          <Typography
            variant="h4"
            style={{ marginBottom: "auto", fontSize: "2rem" }}
          >
            Create multiple <br />
            sub-account
          </Typography>
          <footer>&copy; 2020 Prospa Inc.</footer>
        </Grid>
      </Grid>
    </Hidden>
  );
};

export default SideBar;
