import React from "react";

const Job = () => {
  return (
    <div className="job-row">
      <div className="job-inner">
        <div className="company-logo">
          <img src={require(`../assets/Google.png`)} alt={`Google Logo`} />
        </div>
        <div class="job-description">
          <h3 className="company-name">Google</h3>
          <h5 className="position">Senior Software Engineer</h5>
        </div>
        <div className="job-misc">
          <span className="date">8 days ago</span>
          <span className="location">Mountain View, CA</span>
        </div>
      </div>
    </div>
  );
};

export default Job;
