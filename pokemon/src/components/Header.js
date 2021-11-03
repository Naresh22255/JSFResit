import React from "react";
import "./Header.scss";
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
        <nav>
          <div className="header__container">
            <div className="header__container--child">
              <Link to="/">Home</Link>
            </div>
            <div className="header__container--child">
              <Link to="/grass">Grass</Link>
            </div>
            <div className="header__container--child">
              <Link to="/contact">Contact</Link>
            </div>

            <form>
              <textarea placeholder="Search..."></textarea>
              <input type="submit" />
            </form>
            <div>
              <MenuRoundedIcon />
            </div>
          </div>
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
      </Router>
    </div>
  );
}

export default Header;
