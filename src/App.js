import { Redirect, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import BusAcc from "./pages/BusAcc";

function App() {
  return (
    <Router>
      <Route exact path="/signup">
        <AuthLayout children={<SignUp />} />
      </Route>
      <Route exact path="/busacc">
        <AuthLayout backLink="/signup" children={<BusAcc />} />
      </Route>
      <Route exact path="/signin">
        <AuthLayout signInView children={<SignIn />} />
      </Route>
      <Route exact path="/dashboard">
        <AuthLayout children={<SignIn />} />
      </Route>
      <Route>
        <Redirect to="/signup" />
      </Route>
    </Router>
  );
}

export default App;
