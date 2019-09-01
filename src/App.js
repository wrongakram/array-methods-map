import React from "react";
import "./App.scss";

import Job from "./components/job";
import { jobsAvailable } from "./data/data";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="job-container">
          {jobsAvailable.map((job, index) => (
            <Job
              Company={job.company}
              key={index}
              Title={job.title}
              Location={job.location}
              DatePosted={job.datePosted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
