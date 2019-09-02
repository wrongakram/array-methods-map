import React from "react";
import "./App.scss";

// Components
import Job from "./components/job";
// Data
import { jobsAvailable } from "./data/data";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="job-container">
          <Job />
        </div>
      </div>
    </div>
  );
};

export default App;
