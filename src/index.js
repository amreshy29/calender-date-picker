import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ReactCalenderDate from "./ReactCalenderDate";

import "./styles.css";
function getParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return {
    query: searchParams.get("date") || ""
  };
}

function App() {
  return (
    <React.Fragment>
      <Router>
        <React.Fragment>
          <Route
            path="/"
            render={({ location, history }) => {
              const { query } = getParams(location);
              return <ReactCalenderDate query={query} history={history} />;
            }}
          />
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
