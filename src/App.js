import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components";

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Home />
      </CssBaseline>
    );
  }
}

export default App;
