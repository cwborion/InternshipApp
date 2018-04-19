import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StudentHeader from './StudentHeader';
import { Link } from 'react-router-dom';

import { sumbitStudentSignup } from '../actions/studentActions';

const style = {
  margin: 12,
};

class StudentSignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: '',
      fieldOfStudy: '',
      skills: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    sumbitStudentSignup(this.state);
  }


  render() {
    return (
      <div>
        <StudentHeader />
        <h1>StudentSignupPage.js</h1>
        <h2>Tell us a little about yourself...</h2>

        <form onSubmit={this.handleSubmit}>
          <p>
            <TextField
            //this field represents possible v2 for each field
              name='firstName'
              type='text'
              floatingLabelText='First Name'
              hintText='...type your first name'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <TextField
              name='lastName'
              type='text'
              floatingLabelText='Last Name'
              hintText='...type your last name'
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <TextField
              name='email'
              type='email'
              floatingLabelText='Email address'
              hintText='...type your email address'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <TextField
              name='password'
              type='password'
              floatingLabelText='Create a password'
              type='password'
              hintText="...create a password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <TextField
              name='retypePassword'
              type='password'
              floatingLabelText='Reenter password'
              hintText='...re-enter password for verification'
              value={this.state.retypePassword}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <TextField
              //future version may include major selector from prepopulated list
              name='fieldOfStudy'
              type='text'
              floatingLabelText='Field of Study'
              hintText="...type your major"
              value={this.state.fieldOfStudy}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <TextField
              //future version may include checkbox to select from prepopulated list
              name='skills'
              type='text'
              floatingLabelText='Skills'
              hintText='...list your skills'
              multiLine={false}
              fullWidth={false}
              value={this.state.skills}
              onChange={this.handleChange}
            />
          </p>

            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              type='submit'
            />
            <RaisedButton
              containerElement={<Link to="/" />}
              label="Cancel"
              secondary={true}
              style={style}
            />

        </form>
      </div>
    );
  }
}
export default StudentSignUpPage;
