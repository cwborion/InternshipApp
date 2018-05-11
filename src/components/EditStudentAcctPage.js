import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import StudentHeader from './StudentHeader';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};

class EditStudentAcctPage extends React.Component {
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

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleFirstNameUpdate = this.handleFirstNameUpdate.bind(this);
    this.handleLastNameUpdate = this.handleLastNameUpdate.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handleRetypePasswordUpdate = this.handleRetypePasswordUpdate.bind(this);
    this.handleFieldOfStudyUpdate = this.handleFieldOfStudyUpdate.bind(this);
    this.handleSkillsUpdate = this.handleSkillsUpdate.bind(this);

  }

  handleSubmit(event) {
    alert('STUDENTeditAcctPage --> '
      + this.state.firstName + ' | '
      + this.state.lastName + ' | '
      + this.state.email + ' | '
      + this.state.password + ' | '
      + this.state.retypePassword + ' | '
      + this.state.fieldOfStudy + ' | '
      + this.state.skills + ' |'
    );
    event.preventDefault();
  }

  handleFirstNameUpdate(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameUpdate(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailUpdate(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordUpdate(event) {
    this.setState({ password: event.target.value });
  }

  handleRetypePasswordUpdate(event) {
    this.setState({ retypePassword: event.target.value });
  }

  handleFieldOfStudyUpdate(event) {
    this.setState({ fieldOfStudy: event.target.value });
  }

  handleSkillsUpdate(event) {
    this.setState({ skills: event.target.value });
  }

  render() {
    return (
      <div>
        <StudentHeader />
        <h2>Edit Your Account Information</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            //this field represents possible v2 for each field
            floatingLabelText='First Name'
            name='firstName'
            type='text'
            hintText='Name to be edited'
            value={this.state.firstName}
            onChange={this.handleFirstNameUpdate}
          />
          <br />
          <TextField
            floatingLabelText='Last Name'
            name='lastName'
            type='text'
            hintText='Name to be edited'
            value={this.state.lastName}
            onChange={this.handleLastNameUpdate}
          />

          <br />
          <TextField
            floatingLabelText='Email'
            name='email'
            type='email'
            hintText='Email to be edited, must be ACC email'
            value={this.state.email}
            onChange={this.handleEmailUpdate}
          />

          <br />
          <TextField
            floatingLabelText='Password'
            name='password'
            type='password'
            hintText="password to be edited"
            value={this.state.password}
            onChange={this.handlePasswordUpdate}
          />

          <br />
          <TextField
            floatingLabelText='Retype Password'
            name='password'
            type='password'
            hintText='retype password to be edited'
            value={this.state.retypePassword}
            onChange={this.handleRetypePasswordUpdate}
          />

          <br />
          <TextField
            //future version may include major selector from prepopulated list
            floatingLabelText='Major/Field of Study'
            name='major'
            type='text'
            hintText="field of study to edit"
            value={this.state.fieldOfStudy}
            onChange={this.handleFieldOfStudyUpdate}
          />

          <br />
          <TextField
            //future version may include checkbox to select from prepopulated list
            floatingLabelText='Skills'
            name='skills'
            type='text'
            hintText='skills to edit'
            multiLine={false}
            //rows={2}
            fullWidth={false}
            value={this.state.skills}
            onChange={this.handleSkillsUpdate}
          />

          <br />
          <RaisedButton
            containerElement={<Link to="/student/dash" />}
            label="Cancel"
            primary={true}
            style={style}
          />
          <RaisedButton
            type="submit"
            label="Update & Save"
            secondary={true}
            style={style}
          />

        </form>
      </div>

    );
  }
}

export default EditStudentAcctPage;