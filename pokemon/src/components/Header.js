import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grass from "./Grass";
import Contact from "./Contact";
import Home from "./Home";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Header() {
  return (
    <div className="header">
      {/* <h2>Header</h2> */}
      <Router>
        <div>
          <nav>
            <ul>
              <div className="header__container">
                <div>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/grass">Grass</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </div>

                <form>
                  <textarea placeholder="Search..."></textarea>
                  <input type="submit" />
                </form>
                <div>
                  <MenuRoundedIcon />
                </div>
              </div>
            </ul>
          </nav>

          <Switch>
            <Route path="/grass">
              <Grass />
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
    </div>
  );
}

export default Header;
