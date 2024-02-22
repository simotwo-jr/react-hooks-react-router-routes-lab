import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
   
      <div>
        {/* Render the NavBar component */}
        <NavBar />

        {/* Use Switch to render the first matching Route */}
        <Switch>
          {/* Route for /movies */}
          <Route path="/movies">
            <Movies />
          </Route>

          {/* Route for /directors */}
          <Route path="/directors">
            <Directors />
          </Route>

          {/* Route for /actors */}
          <Route path="/actors">
            <Actors />
          </Route>

          {/* Default route for / or any other undefined route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;
