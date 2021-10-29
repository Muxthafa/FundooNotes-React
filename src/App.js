import "./App.css";
import Registration from "./components/signUp.jsx";
import Signin from "./components/signIn.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Registration} />
          <Route path="/login" exact component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
