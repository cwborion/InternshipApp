// employer signup
export const submitSignup = (data) => {
  return fetch('http://localhost:3001/employer/signup', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
};

// employer create job post

export const submitCreateJob = (data) => {
  return fetch('http://localhost:3001/job', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
};

// Render Jobs

export const getJobs = (companyid) => {
  return fetch(`http://localhost:3001/job?companyid=${companyid}&limit=20`, {
    method: 'GET',
    mode: 'CORS',
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      return data;
    }).catch(err => { console.log('Error: ', err) });
};

// UPDATE / edit jobs

export const updateJob = (id, data) => {
  console.log('id sent in is ', id);
  return fetch(`http://localhost:3001/job/${id}`, {
    method: 'PUT',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
};

// ------------------------------------------------

// DELETE Job

// export const deleteJob = (jobid)  => {
//   return fetch(`http://localhost:3001/job/:job_id`, {
//     method: 'DELETE',
//     mode: 'CORS',
//     body: JSON.stringify(jobid),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(jobid => {
//     return jobid;
//   }).catch(err => {console.log('Error: ', err)});
// };

export const deleteJob = (jobid, data) => {
  console.log('jobid sent in is ', jobid)
  return fetch(`http://localhost:3001/job/${jobid}`, {
    method: 'DELETE',
    mode: 'CORS',
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      return data;
    }).catch(err => { console.log('Error: ', err) });
};