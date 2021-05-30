import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./screens/Home/home";
import { About } from "./screens/About/about";
import { Writing } from "./screens/Writing/index";
import { Photography } from "./screens/Photography/index";
import { Contact } from "./screens/Contact/index";

function App() {
  return (
    <Router>
      <div className={"body"}>
        <nav className={"App-header"}>
          <ul className={"list"}>
            <li className={"list-item"}>
              <div className={"link-container"}>
                <Link className={"link"} to="/">
                  Home
                </Link>
              </div>
            </li>
            <li className={"list-item"}>
              <div className={"link-container"}>
                <Link className={"link"} to="/about">
                  About
                </Link>
              </div>
            </li>
            <li className={"list-item"}>
              <div className={"link-container"}>
                <Link className={"link"} to="/photography">
                  Photography
                </Link>
              </div>
            </li>
            <li className={"list-item"}>
              <div className={"link-container"}>
                <Link className={"link"} to="/writing">
                  Writing
                </Link>
              </div>
            </li>

            <li className={"list-item"}>
              <div className={"link-container"}>
                <Link className={"link"} to="/contact">
                  Contact
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/photography">
            <Photography />
          </Route>
          <Route path="/writing">
            <Writing />
          </Route>
          <Route path="/contact">
            <Contact />
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
