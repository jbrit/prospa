import { Grid, Hidden, Typography, Button } from "@material-ui/core";
import { ReactComponent as Logo } from "../assets/svg/logo_btm.svg";
import { Notifications } from "@material-ui/icons";

const Dashboard = ({ children, backLink, signInView }) => {
  return (
    <Grid container>
      <Hidden mdDown>
        <Grid
          item
          container
          style={{
            backgroundColor: "#fff",
            maxWidth: "300px",
            padding: "32px",
            boxShadow: "0px 2px 22px 0px #8397AB",
            zIndex: 1,
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
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        style={{
          minHeight: "100vh",
          flexGrow: 1,
          backgroundColor: "rgba(200,200,200,0.1)",
          maxWidth: "100%",
        }}
        container
        direction="column"
        item
        xs={12}
        md={9}
      >
        <div
          style={{
            marginBottom: "100px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            height: "50px",
            boxShadow: "0px 2px 22px 0px #8397AB",
            padding: "0 32px",
            color: "#8397AB",
          }}
        >
          <Typography variant="h6" style={{ marginRight: "auto" }}>
            Dashboard
          </Typography>

          <Button variant="outlined" style={{ padding: "3px", minWidth: 0 }}>
            <Notifications fontSize="small" style={{ color: "#8397AB" }} />
          </Button>
        </div>
        <Grid container direction="column" alignItems="center">
          <div
            style={{
              width: "80%",
              maxWidth: "375px",
              margin: "auto",
            }}
          >
            {children}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
