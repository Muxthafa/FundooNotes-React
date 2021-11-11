import Registration from "./pages/signUp.jsx";
import Signin from "./pages/signIn.jsx";
import ForgetPassword from "./pages/forgetPassword.jsx";
import ResetPassword from "./pages/resetPassword.jsx";
import Notes from "./pages/Dashboard.jsx"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routers() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Registration} />
          <Route path="/login" exact component={Signin} />
          <Route path="/forgot-password" exact component={ForgetPassword} />
          <Route path="/reset/:token" exact component={ResetPassword} />
          <Route path="/notes" exact component={Notes} />
        </Switch>
      </Router>
    </>
  );
}
