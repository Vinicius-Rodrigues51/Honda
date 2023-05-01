import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { StateValue } from "./UserContext";

console.log(StateValue);

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
