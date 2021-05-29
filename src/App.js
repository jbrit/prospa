import { Redirect, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Route exact path="/signup">
        <AuthLayout children={<SignUp />} />
      </Route>
      <Route exact path="/signin">
        <AuthLayout signInView children={<SignIn />} />
      </Route>
      <Route>
        <Redirect to="/signup" />
      </Route>
    </Router>
  );
}

export default App;
