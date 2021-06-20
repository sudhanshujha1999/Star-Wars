import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Planets from "../Planets/Planets";
import Planet from "../Planets/Planet";
import Films from "../Films/Films";
import Residents from "../Residents/Residents";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Planets} exact />
      <Route path="/planets" component={Planet} exact />
      <Route path="/films" component={Films} exact />
      <Route path="/residents" component={Residents} exact />
    </Router>
  );
};

export default App;
