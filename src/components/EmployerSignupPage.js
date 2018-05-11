import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';

import { submitSignup } from '../actions/employerActions';

// import axios from 'axios';

const style = {
  margin: 12,
};

class EmployerSignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      password: '',
      retypePassword: '',
      url: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    submitSignup(this.state);
  }

  render() {
    return (
      <div>
        <EmployerHeader />
        <h1>EmployerSignupPage.js</h1>
        <h2>Tell us a little about yourself...</h2>

        <span>Company logo:
        		<FloatingActionButton mini={true} style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </span>

        <form  onSubmit={this.handleSubmit}>

          <TextField
            name='companyName'
            type='text'
            floatingLabelText='Company name'
            hintText='...type your company name'
            value={this.state.companyName}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name='firstName'
            type='text'
            floatingLabelText='First name'
            hintText='...type your first name'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name='lastName'
            type='text'
            floatingLabelText='Last name'
            hintText='...type your last name'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name='email'
            type='email'
            floatingLabelText='Email'
            hintText='...type your ACC email address'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name='password'
            type='password'
            floatingLabelText='Password'
            hintText='...create a password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            // updated this textfield to match password above
            // this field is not saving data, only validating against password
            name='retypePassword'
            type='password'
            floatingLabelText='Retype password'
            hintText='...re-enter password for verification'
            value={this.state.retypePassword}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name='url'
            type='text'
            floatingLabelText='Company URL'
            hintText='...enter company URL'
            value={this.state.url}
            onChange={this.handleChange}
          />
          <br />
        <RaisedButton
          label="Submit"
          primary={true}
          style={style}
          type="submit"
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

export default EmployerSignupPage;
