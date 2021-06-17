import React, { useContext } from "react";
import Home from "./home";
import ContactUs from "./contactus";
import { ThemeContext } from "../Context/themeContext";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

export default function Parent() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/contactus">ContactUs</Link>
        <Link to="/menu">Menu</Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Menu() {
  let history = useHistory();
  const theme = useContext(ThemeContext);

  return (
    <div className={theme}>
      <p>You must log in to view the page at </p>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          history.push("/contactus");
        }}
      >
        Contact Us
      </button>
    </div>
  );
}
