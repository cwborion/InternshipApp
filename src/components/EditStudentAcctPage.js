import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
    this.setState({firstName: event.target.value});
  }

  handleLastNameUpdate(event) {
    this.setState({lastName: event.target.value});
  }

  handleEmailUpdate(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordUpdate(event) {
    this.setState({password: event.target.value});
  }

  handleRetypePasswordUpdate(event) {
    this.setState({retypePassword: event.target.value});
  }

  handleFieldOfStudyUpdate(event) {
    this.setState({fieldOfStudy: event.target.value});
  }

  handleSkillsUpdate(event) {
    this.setState({skills: event.target.value});
  }

  render() {
    return (
      <div> 
        <StudentHeader />
        <h2>Edit Your Account Information</h2>
        <form onSubmit={this.handleSubmit}>
        <p>First Name:                      
          <TextField 
          //this field represents possible v2 for each field
            name='firstName'
            type='text'
            hintText='Name to be edited'
            value={this.state.firstName}
            onChange={this.handleFirstNameUpdate} 
          />                       
        </p>

        <p>Last Name:         
          <TextField 
            name='lastName'
            type='text'
            hintText='Name to be edited'                    
            value={this.state.lastName}
            onChange={this.handleLastNameUpdate} 
          />                      
        </p>

        <p>Email:                     
          <TextField 
            name='email'
            type='email'
            hintText='Email to be edited, must be ACC email'
            value={this.state.email} 
            onChange={this.handleEmailUpdate} 
          />                      
        </p>  

        <p>Password:                 
          <TextField 
            name='password'
            type='password'
            hintText="password to be edited" 
            value={this.state.password} 
            onChange={this.handlePasswordUpdate} 
          />                      
        </p>  
          
        <p>Re-type Password:                     
          <TextField 
            name='password'
            type='password'
            hintText='retype password to be edited' 
            value={this.state.retypePassword} 
            onChange={this.handleRetypePasswordUpdate} 
          />                      
        </p>

        <p>Major/Field of Study:            
          <TextField 
            //future version may include major selector from prepopulated list
            name='major'
            type='text'
            hintText="field of study to edit" 
            value={this.state.fieldOfStudy} 
            onChange={this.handleFieldOfStudyUpdate} 
          />                        
        </p>

        <p>Skills:                      
          <TextField 
            //future version may include checkbox to select from prepopulated list
            name='skills'
            type='text'
            hintText='skills to edit'
            multiLine={false}
            //rows={2}
            fullWidth={false}
            value={this.state.skills} 
            onChange={this.handleSkillsUpdate} 
          />                         
        </p>
      
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