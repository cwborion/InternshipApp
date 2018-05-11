import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';


const style = {
  margin: 12,
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }

  handleSubmit(event) {
    alert('LoginPage --> '
      + this.state.email + ' | '
      + this.state.password + ' | '
    );
    event.preventDefault();
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Internship</h1>
      
        <form onSubmit={this.handleSubmit}>

        <div>
          <TextField 
            name='email'
            type='text'
            floatingLabelText='Email Address'
            style={style}
            hintText='...ACC email required'
            //value needs a closer look
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        
        <div>
          <TextField 
            name='password'
            type='password'
            floatingLabelText='Password'
            style={style}
            hintText='...enter password here'            
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        {/* href="#" below till link is put in place */}
        <a>forgot password?</a>
        <br />
        <RaisedButton 
          label="Login" 
          primary={true} 
          style={style} 
          type="submit"
        />
        <Divider />
        <h3>Sign up</h3>
        <RaisedButton 
          containerElement={<Link to="/student/signup" />} 
          label="Student" 
          primary={true} 
          style={style} 
        />
        <RaisedButton 
          containerElement={<Link to="/employer/signup" />} 
          label="Employer" 
          primary={true} 
          style={style} 
        />

      </form>

      </div>
    );
  }
}

export default LoginPage;
