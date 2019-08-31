import React, {useEffect} from 'react';
import './App.scss';

import Job from './components/job'

const jobsAvailable = [
  {id: 0, company: 'Google', title: 'Senior Software Engineer', location: 'Mountain View, CA', datePosted:'8 days ago'},
  {id: 1, company: 'Facebook', title: 'Junior UI/UX Designer', location: 'New York, NY', datePosted:'5 days ago'},
  {id: 2, company: 'Medium', title: 'Cloud Architect Engineer', location: 'San Francisco, CA', datePosted:'3 days ago'},
  {id: 3, company: 'Netflix', title: 'Data Scientist', location: 'Los Angeles, CA', datePosted:'2 days ago'}
]

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="job-container">
          {
            jobsAvailable.map((job, index) => (
              <Job Company={job.company} key={index} Title={job.title} Location={job.location} DatePosted={job.datePosted}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;

