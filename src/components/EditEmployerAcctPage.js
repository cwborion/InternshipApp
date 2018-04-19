import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};

class EditEmployerAcctPage extends React.Component {
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

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleFirstNameUpdate = this.handleFirstNameUpdate.bind(this);
    this.handleLastNameUpdate = this.handleLastNameUpdate.bind(this);
    this.handleCompanyNameUpdate = this.handleCompanyNameUpdate.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handleRetypePasswordUpdate = this.handleRetypePasswordUpdate.bind(this);
    this.handleUrlUpdate = this.handleUrlUpdate.bind(this);

  }

  handleSubmit(event) {
    alert('EditEmployerAcctPage --> '
      + this.state.firstName + ' | '
      + this.state.lastName + ' | '
      + this.state.companyName + ' | '
      + this.state.email + ' | '
      + this.state.password + ' | '
      + this.state.retypePassword + ' | ' 
      + this.state.url + '.'
    );
    event.preventDefault();
  }

  handleFirstNameUpdate(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameUpdate(event) {
    this.setState({ lastName: event.target.value });
  }

  handleCompanyNameUpdate(event) {
    this.setState({ companyName: event.target.value });
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

  handleUrlUpdate(event) {
    this.setState({ url: event.target.value });
  }

  render() {
    return (
      <div>
        <EmployerHeader />
        <h2>Edit Your Account Information</h2>
        <p>Company logo:
        		<FloatingActionButton mini={true} style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </p>

        <form onSubmit={this.handleSubmit}>

          <p>First Name:
            <TextField
              name="firstName"
              hintText="First name"
              onChange={this.handleFirstNameUpdate}
              value={this.state.firstName}
            />
          </p>
          <p>Last Name:
            <TextField
              name="lastName"
              hintText="Last name"
              onChange={this.handleLastNameUpdate}
              value={this.state.lastName}
            />
          </p>
          <p>Company Name:
            <TextField
              name="companyName"
              hintText="Enter company name"
              onChange={this.handleCompanyNameUpdate}
              value={this.state.companyName}
            />
          </p>
          <p>Email:
            <TextField
              name="email"
              type="email"
              hintText="Must use ACC email"
              onChange={this.handleEmailUpdate}
              value={this.state.email}
            />
          </p>
          <p>Password:
            <TextField
              name="password"
              type="password"
              hintText="Password requirements go here"
              onChange={this.handlePasswordUpdate}
              value={this.state.password}
            />
          </p>
          <p>Re-type password:
            <TextField
              name="retypePassword"
              type="password"
              hintText="Re-enter password for veriication"
              onChange={this.handleRetypePasswordUpdate}
              value={this.state.retypePassword}
            />
          </p>
          <p>URL: 
          <TextField 
            name="url"
            hintText="Enter URL" 
            onChange={this.handleUrlUpdate} 
            value={this.state.url} 
          />
        </p>

          <RaisedButton
            containerElement={<Link to="/employer/dash" />}
            label="Cancel"
            primary={true}
            style={style} 
          />
          <RaisedButton 
            label="Update & Save" 
            secondary={true} 
            style={style} 
            type="submit"
          />

        </form>

      </div>

        );
  }
}

export default EditEmployerAcctPage;