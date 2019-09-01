import React from "react";

const Job = ({ Company, Title, Location, DatePosted }) => {
  return (
    <div className="job-row">
      <div className="job-inner">
        <div className="company-logo">
          <img
            src={require(`../assets/${Company}.png`)}
            alt={`${Company} Logo`}
          />
        </div>
        <div class="job-description">
          <h3 className="position">{Company}</h3>
          <h5 className="company-name">{Title}</h5>
        </div>
        <div className="job-misc">
          <span className="date">{DatePosted}</span>
          <span className="location">{Location}</span>
        </div>
      </div>
    </div>
  );
};

export default Job;
