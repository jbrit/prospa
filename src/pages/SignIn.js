import { Button, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const SignUp = () => {
  const history = useHistory();
  return (
    <>
      <Typography variant="h5">Welcome Back To Prospa</Typography>
      <Typography
        style={{ marginBottom: "2rem", color: "#8397AB" }}
        component="p"
      >
        An account, with powerful, personalised tools all in one place
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <TextField
          style={{ marginBottom: "1.5rem" }}
          color="secondary"
          label="Email Address"
          type="email"
          variant="filled"
          size="small"
        />

        <TextField
          style={{ marginBottom: "1.5rem" }}
          color="secondary"
          label="Enter Password"
          type="password"
          variant="filled"
          size="small"
        />
        <Button
          onClick={() => {
            history.push("/dashboard");
          }}
          variant="contained"
          size="large"
          color="secondary"
        >
          Next
        </Button>
      </form>
    </>
  );
};

export default SignUp;
