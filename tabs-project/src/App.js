import React, { useState, useEffect } from 'react';

import { FaAngleDoubleRight } from 'react-icons/fa';

const App = () => {
  const url = 'https://course-api.com/react-tabs-project';

  // state
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  // fetch jobs
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setLoading(false);
  };

  // use effect
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading ...</h1>
      </section>
    );
  }

  // destructuring
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
                key={item.id}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>

          {duties.map((duty, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type='button' className='btn'>
        more info
      </button>
    </section>
  );
};

export default App;
