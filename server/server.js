const read = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const EmployerSchema = require('./models/Employers');
const JobSchema = require('./models/Jobs');
const StudentSchema = require('./models/Students');

const mongoose = require('mongoose');

const ObjectID = require('mongodb').ObjectID;



// const ObjectId = mongoose.Types.ObjectId;

const port = process.env.PORT || 3001;


// --------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

var url = 'mongodb://jason.jiron:milkshake8@ds225078.mlab.com:25078/killerbs';

mongoose.connect(url, function (err) {
  if (err) throw err;
  console.log('mLab is now connected to MongoDB');
});

const Employer = mongoose.model('Employer', EmployerSchema);
const Student = mongoose.model('Student', StudentSchema);
const Job = mongoose.model('Job', JobSchema);

// app.post('/student/signup', (req, res) => {
//   var studentSignup = new Signup(req.body);
//   studentSignup.save()
//     .then(item => {
//       res.send('New sign in saved');
//     })
//     .catch(err => {
//       res.status(400).send('unable to save data');
//     });
// });





// student sign up page --------------------------------------------------------

app.post('/student/signup', (req, res) => {
  Student.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      fieldOfStudy: req.body.fieldOfStudy,
      skills: req.body.skills
    }
  )
    .then(data => {
      console.log('Data retunred from Student signup', data);
      res.json(data);
    })
    .catch(err => {
      res.json({ code: 400, message: "Student signup failed", error: err });
    });
});


// ****** Get all students from Postman *******

app.get('/student', (req, res) => {
  Student.find((err, students) => {
    if (err)
      res.send(err);
    res.json(students);
  })
});

// employer signup form submit start --------------------------------------------------------

app.post('/employer/signup', (req, res) => {
  Employer.create(
    {
      companyName: req.body.companyName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      url: req.body.url
    }
  )
    .then(data => {
      console.log('Data returned from Employer signup ', data);
      res.json(data);
    })
    .catch(err => {
      res.json({ code: 400, message: "Employer signup failed", error: err });
    });
});

// employer signup form submit end / ------------------------------------------------------

// app.get to get and see ALL employers in postman

app.get('/employer', (req, res) => {
  Employer.find((err, employers) => {
    if (err)
      res.send(err);
    res.json(employers);
  });
});

// /////////////////


// get the employer with that id (accessed at GET http://localhost:3001/employer/:employer_id)
app.get('/employer/:employer_id', (req, res) => {
  Employer.findById(req.params.employer_id, (err, employer) => {
    if (err)
      res.send(err);
    res.json(employer);
  });
});

// employer update account form PUT ---------------------------------------------------
// be sure to set values in Postman if testing with Postman under the Body tab below the url path bar

app.put('/employer/:employer_id', (req, res) => {
  Employer.findById(req.params.employer_id, (err, employer) => {

    employer.companyName = req.body.companyName;
    employer.firstName = req.body.firstName;
    employer.lastName = req.body.lastName;
    employer.email = req.body.email;
    employer.password = req.body.password;
    employer.url = req.body.url; // updating employer info

    // save info
    employer.save((err) => {
      if (err)
        res.send(err);

      res.json({ message: 'Employer account information updated.' });
    });

  });
});

// employer update account form PUT / -------------------------------------------------

// employer DELETE account form DELETE / ----------------------------------------------

app.delete('/employer/:employer_id', (req, res) => {
  Employer.remove({
    _id: req.params.employer_id
  }, (err, employer) => {
    if (err)
      res.send(err);

    res.json({ message: 'Employer successfully deleted.' });
  });
});

// /////    employer DELETE account form DELETE / -------------------------------------

// GET route for EmpListJobs.js

app.get('/job', (req, res) => {
  // var {limit, companyid} = req.query;
  // var { limit } = req.query;
  // var  companyid  = req.query;
  var companyid = "5a975d329bfa160783522cdf" // not sure what to do with this stuff
  Job.find({ companyId: companyid }).
    limit(20).
    sort({ timePosted: -1 }).
    exec((err, data) => {
      if (err) return (err);
      res.json(data);
    });
})

// GET for job with specific ID

app.get('/job/:job_id', (req, res) => {
  Job.findById(req.params.job_id, (err, job) => {
    if (err)
      res.send(err);
    res.json(job);
  });
});

// POST route for EmpCreatePostPage.js below

app.post('/job', (req, res) => {
  Job.create(
    {
      jobTitle: req.body.jobTitle,
      companyId: ObjectID(req.body.companyId),
      jobDescription: req.body.jobDescription,
      skills: req.body.skills,
      url: req.body.url,
      location: req.body.location
    }
  )
    .then(data => {
      console.log('Data returned from Employer Create Job ', data);
      res.json(data);
    })
    .catch(err => {
      res.json({ code: 400, message: "Employer job post failed", error: err });
    });
});

// POST route for EmpCreatePostPage.js above /-----------------------------------------

// PUT route for updating Job Post below /---------------------------------------------

app.put('/job/:job_id', (req, res) => {
  Job.findByIdAndUpdate(
    req.params.job_id,
    req.body,
    { new: true },
    (err, job) => {
      if (err) return res.status(500).send(err);
      return res.send(job);
    }
  )
});
// PUT route for updating Job Post above /---------------------------------------------



// DELETE route  below for deletion of job post by employer /--------------------------

app.delete('/job/:job_id', (req, res) => {
  Job.findByIdAndRemove(req.params.job_id, (err, job) => {
    if (err) return res.status(400).send(err);
    const response = {
      message: "Job successfully deleted",
      id: job._id
    };
    return res.status(200).send(response);
  })
});

// app.delete('/job/:job_id', (req, res) => {
//   Job.remove({
//     _id: req.params.job_id
//   }, (err, job) => {
//     if (err)
//       res.send(err);

//     res.json({ message: 'Job post successfully deleted.' });
//   });
// });

// DELETE route  above for deletion of job post by employer /--------------------------

// below is unused so far

app.get('/login', (req, res) => { });

app.post('/login', (req, res) => {
  var newLogin = req.body;
  newLogin.createDate = new Date();

  if (!(req.body.firstName || req.bodylastName)) {
    handleError(res, "Invalid user", "Must provide first and last name.", 400);
  }

  db.collection(Students).insertOne(newLogin, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get('/student/login/:id', (req, res) => { });

app.put('/student/login/:id', (req, res) => { });

app.delete('/student/login/:id', (req, res) => { });


//

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});