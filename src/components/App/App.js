import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BusinessList from "../Business/Business.js";
import SearchBar from "../SearchBar/SearchBar.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
