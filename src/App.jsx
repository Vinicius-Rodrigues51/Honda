import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { StateValue } from "./UserContext";
import ReactGA from "react-ga";

// const TRACKING_ID = "UA-267255567-1";
const TRACKING_ID = "921489480582";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <React.Fragment>
      <StateValue>
        <Header />
      </StateValue>
    </React.Fragment>
  );
}

export default App;
