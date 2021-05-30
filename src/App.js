import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Screens/Home/home";
import { About } from "./Screens/About/about";

function App() {
  return (
    <Router>
      <div className={"body"}>
        <nav className={"App-header"}>
          <ul className={"list"}>
            <li className={"list-item"}>
              <Link className={"link"} to="/">
                Home
              </Link>
            </li>
            <li className={"list-item"}>
              <Link className={"link"} to="/about">
                Photography
              </Link>
            </li>
            <li className={"list-item"}>
              <Link className={"link"} to="/about">
                Writing
              </Link>
            </li>
            <li className={"list-item"}>
              <Link className={"link"} to="/about">
                About
              </Link>
            </li>
            <li className={"list-item"}>
              <Link className={"link"} to="/about">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
