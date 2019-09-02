import React from "react";

const Job = ({ Company, Location, DatePosted, Title }) => {
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
          <h3 className="company-name">{Company}</h3>
          <h5 className="position">{Title}</h5>
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
