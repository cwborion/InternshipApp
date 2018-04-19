var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema( 
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
      //HASH
    },
    savedJobs: {
      type: [String]
    },
    fieldOfStudy: {
      type: String
    },
    skills: {
      type: String
    }
  }
);

module.exports = StudentSchema;
