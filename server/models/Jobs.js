var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var JobSchema = new Schema(
{
  jobTitle: {
    type: String,
    required: true,
    trim: true
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employer'
  },
  jobDescription: {
    type: String,
    required: true,
    trim: true
  },
  skills: {
    type: [String]
  },
  timePosted: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = JobSchema;