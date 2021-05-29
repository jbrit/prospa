import { Button, TextField, Typography } from "@material-ui/core";

const SignUp = () => {
  return (
    <>
      <Typography variant="h5">Create your Account</Typography>
      <Typography
        style={{ marginBottom: "2rem", color: "#8397AB" }}
        component="p"
      >
        A short description about account types
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
        action=""
      >
        <TextField
          style={{ marginBottom: "1.5rem" }}
          color="secondary"
          label="First Name"
          variant="filled"
          size="small"
        />
        <TextField
          style={{ marginBottom: "1.5rem" }}
          color="secondary"
          label="Last Name"
          variant="filled"
          size="small"
        />
        <TextField
          style={{ marginBottom: "1.5rem" }}
          color="secondary"
          label="Mobile Number"
          type="tel"
          variant="filled"
          size="small"
        />

        <TextField
          style={{ marginBottom: "1.5rem" }}
          color="secondary"
          label="Email Address"
          type="email"
          variant="filled"
          size="small"
        />
        <Button variant="contained" size="large" color="secondary">
          Next
        </Button>
      </form>
    </>
  );
};

export default SignUp;
