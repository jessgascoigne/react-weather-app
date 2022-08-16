import React from "react";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <Search defaultCity="Seattle" />
      </div>
    </div>
  );
}
