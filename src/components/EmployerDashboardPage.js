import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';

import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';

import SearchBar from 'material-ui-search-bar';

import EmpListJobs from './EmpListJobs';

const dashIcon = <FontIcon className="material-icons" >dashboard</FontIcon>;

const style = {
  margin: 12,
};

export default class EmployerDashboardPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({ expanded: expanded });
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  render() {
    return (
      <div>
        <EmployerHeader />
        <h1>Welcome [companyId]</h1>
        <Card expanded={true} >
          <CardHeader
            title="Manage your job posts"
            subtitle="Find the right hire!"
            avatar={dashIcon}
          />
          
          <CardMedia
            expandable={true}
            overlay={<CardTitle title="Dashboard" subtitle="Hire students in Austin!" />}
          >
            {/* change picture if deployed officially, not legal without request of artist */}
            <img src="http://daveteller.com/wp-content/uploads/2015/05/skyline-cyberpunk-20x10.jpg" alt="" />
          </CardMedia>
          
          <CardText expandable={true}>
            <RaisedButton 
              containerElement={<Link to="/create/post" />}
              label="Create New Job Post" 
              secondary={true} 
              style={style} 
            />
            {/* below styling may eventually be overwritten in a css file */}

            <EmpListJobs />

          </CardText>
          <CardText expandable={true}>
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
              style={{
                margin: '0 auto',
                maxWidth: 800
              }}
              hintText="Search ACC student body for skills or fields of proficiency"
            />
            <textarea>this is where search results for student qualifications/skills will be populated.  Each student returned by the search will be a link to a dialog modal that will contain a link to the student's linkdIn profile.</textarea>
          </CardText>
          <CardActions>
            <FlatButton label="Expand" onClick={this.handleExpand} />
            <FlatButton label="Reduce" onClick={this.handleReduce} />
            <RaisedButton 
              containerElement={<Link to="/edit/employer/acct" />}
              label="Edit/Update Profile" 
              secondary={true} 
              style={style} 
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

