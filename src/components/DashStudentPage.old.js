import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import StudentHeader from './StudentHeader';
import { Link } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const buttonStyle = {
  margin: 12,
  width: 200
}

const tableStyle = {
  width: 1250,
  margin: 'auto',
  marginTop: 30,
  textAlign: 'center',
  backgroundColor: 'rgba(0, 188, 212, 0.20)'

};
const table = {
  width: '100%'
};
const style = {
  margin: 12,
  width: 800
};

class DashStudentPage extends React.Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };


  render () {
    return (
    <div>
      <StudentHeader />
      <Divider />
      <div>
        <h1>Welcome Back USER NAME</h1>
        <p>Search:
          <TextField style={style}
            hintText="FIND A JOB"
          />
        </p>
      </div>
      <RaisedButton label="Search" primary={true} style={buttonStyle} />

        <div style={table}>
        <Table style={tableStyle} onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow selected={this.isSelected(0)}>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>Job 1</TableRowColumn>
              <TableRowColumn>Apple</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(1)}>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Job 2</TableRowColumn>
              <TableRowColumn>Google</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(2)}>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Job 3</TableRowColumn>
              <TableRowColumn>Facebook</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
          <RaisedButton 
            containerElement={<Link to="/edit/student/acct" />}
            label="Edit" 
            primary={false} 
            style={buttonStyle} 
          />
      </div>
      {/* editButton() */}
    </div>
    );
  }
}

export default DashStudentPage;
