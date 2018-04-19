// Student Signup

export const sumbitStudentSignup = (data) => {
  return fetch('http://localhost:3001/student/signup', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch (err => err);
};
