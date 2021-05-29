import { Grid, Link } from "@material-ui/core";
import BackButton from "../components/BackButton";
import SideBar from "../components/SideBar";

const AuthLayout = ({ children, backLink, signInView }) => {
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
          {backLink && <BackButton onClick={() => alert(backLink)} />}
          <div style={{ marginLeft: "auto", marginRight: ".5rem" }}>
            {signInView ? "Don't have an account?" : "Already a member?"}
          </div>
          {signInView ? <Link>Sign Up</Link> : <Link>Sign In</Link>}
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
