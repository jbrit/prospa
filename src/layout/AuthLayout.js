import { Grid, Link } from "@material-ui/core";
import { useHistory } from "react-router";
import BackButton from "../components/BackButton";
import SideBar from "../components/SideBar";

const AuthLayout = ({ children, backLink, signInView }) => {
  const history = useHistory();
  return (
    <Grid container>
      <SideBar />
      <Grid
        style={{
          minHeight: "100vh",
          flexGrow: 1,
          backgroundColor: "rgba(200,200,200,0.1)",
          maxWidth: "100%",
          padding: "32px",
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
          }}
        >
          {backLink && <BackButton onClick={() => history.push(backLink)} />}
          <div style={{ marginLeft: "auto", marginRight: ".5rem" }}>
            {signInView ? "Don't have an account?" : "Already a member?"}
          </div>
          {signInView ? (
            <Link onClick={() => history.push("/signup")}>Sign Up</Link>
          ) : (
            <Link onClick={() => history.push("/signin")}>Sign In</Link>
          )}
        </div>
        <Grid container direction="column" alignItems="center">
          <div
            style={{
              width: "80%",
              maxWidth: "320px",
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

export default AuthLayout;
