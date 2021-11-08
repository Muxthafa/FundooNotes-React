import "./App.css";
import Registration from "./components/signUp.jsx";
import Signin from "./components/signIn.jsx";
import ForgetPassword from "./components/forgetPassword.jsx";
import ResetPassword from "./components/resetPassword.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Registration} />
          <Route path="/login" exact component={Signin} />
          <Route path="/forgot-password" exact component={ForgetPassword} />
          <Route path="/reset/:token" exact component={ResetPassword} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
