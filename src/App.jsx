import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { StateValue } from "./UserContext";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("G-MJ4BT20P6P");

  return (
    <React.Fragment>
      <StateValue>
        <Header />
      </StateValue>
    </React.Fragment>
  );
}

export default App;
