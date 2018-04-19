import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';

// test imports
import LoginPage from './components/LoginPage';
import StudentSignupPage from './components/StudentSignupPage';
import EmployerSignupPage from './components/EmployerSignupPage';
import EmployerDashboardPage from './components/EmployerDashboardPage';
import EditStudentAcctPage from './components/EditStudentAcctPage';
import JobPostedPage from './components/JobPostedPage';
import EmpCreatePostPage from './components/EmpCreatePostPage';
import EmpEditPostPage from './components/EmpEditPostPage';
import EditEmployerAcctPage from './components/EditEmployerAcctPage';
import Footer from './components/Footer';
import DashStudentPage from './components/DashStudentPage';
import StudentViewPost from './components/StudentViewPost';


// test imports

class App extends Component {
  render() {

    return (
      <div className="App">

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/student/dash" component={DashStudentPage} />
            <Route path="/student/signup" component={StudentSignupPage} />
            <Route path="/edit/student/acct" component={EditStudentAcctPage} />
            <Route path="/employer/dash" component={EmployerDashboardPage} />
            <Route path="/employer/signup" component={EmployerSignupPage} />
            <Route path="/edit/employer/acct" component={EditEmployerAcctPage} />
            <Route path="/job/posted" component={JobPostedPage} />
            <Route path="/view/post" component={StudentViewPost} />
            <Route path="/edit/job/post" component={EmpEditPostPage} />
            <Route path="/create/post" component={EmpCreatePostPage} />
          </Switch>

          {/* <Footer /> */}



        </MuiThemeProvider>
        
      </div>
    );
  }
}

export default App;
