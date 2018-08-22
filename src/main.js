import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Main() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);