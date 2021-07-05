import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./Index";
import { About } from "./about";
import { UserContext } from "./userContext";

const AppRouter = () => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route path="/" exact component={Index} />
          <Route path="/about" exact component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default AppRouter;
