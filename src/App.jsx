import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { StateValue } from "./UserContext";
import ReactGA from "react-ga";

const TRACKING_ID = "G-Y031X1L9SG";
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
