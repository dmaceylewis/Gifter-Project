import React from "react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <ApplicationViews />
      </Router>
    </div>
  );
}

export default App;