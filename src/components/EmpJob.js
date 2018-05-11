import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import EmpEditPostPage from './EmpEditPostPage';

import { deleteJob } from '../actions/employerActions';

export default class EmpJob extends React.Component {
	constructor(props) {
		super(props);
    this.handleUpdate = this.handleUpdate.bind(this)
		this.state = {
			jobCard: false,
			updateModal: false,
			deleteModal: false
		}
	}

  handleToggle = (event, toggle) => {
    this.setState({ jobCard: toggle });
  };

  handleUpdate = (event) => {
    event.preventDefault();
    this.setState({
      updateModal: !this.state.updateModal
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  updateJob = () => {
  };

  deleteConfirm = () => {
  	this.setState({ deleteModal: !this.state.deleteModal })
  };

  handleDeleteJob = (jobid) => {
    console.log('jobid is ', jobid);
    console.log('state in EmpJob.js is ', this.state);
    deleteJob(jobid);
  }

// functions to write job props to state to pass into child component

	render () {
		var {job} = this.props;
		// const actions = [
    //   <RaisedButton
    //     label="Cancel"
    //     secondary={true}
    //     containerElement={<Link to="/employer/dash" />}
    //     onClick={this.handleClose}

    //   />,
    //   <RaisedButton
    //     label="Submit"
    //     primary={true}
    //     keyboardFocused={true}
    //     onClick={this.handleClose}
    //   />
    // ];

// modalActions grants options to the actions value in modal each job populates in

    const modalActions = [
    	<FlatButton
    		label='Cancel'
    		primary={true}
    		onClick={this.deleteConfirm}

    	/>,
    	<FlatButton
    		label='Delete'
    		primary={true}
    		// disabled={true}
    		onClick={() => { this.handleDeleteJob(job._id)}}
    	/>
    ]

		return(
			<div>
        <Dialog
          title='Edit Job Post'
          // actions={actions}
          modal={false}
          open={this.state.updateModal}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <EmpEditPostPage job={this.props.job} handleOpen={this.handleUpdate}/>
        </Dialog>
				<Card expanded={this.state.jobCard}  >

					<CardText>
            <Toggle
              toggled={this.state.jobCard}
              onToggle={this.handleToggle}
              labelPosition='right'
              label={job.jobTitle}
            />
          </CardText>
          <CardText expandable={true}>
        		<h5>{job.timePosted}</h5>
        		<h5>{job.location}</h5>
        		<h5>{job.skills}</h5>
        		<h5>{job.jobDescription}</h5>
					
						<FlatButton label='Update' primary={true} onClick={this.handleUpdate}/>

            <RaisedButton 
              label='Delete' 
              secondary={true} 
              onClick={this.deleteConfirm}
            />
		        <Dialog
		          title='Are you sure you want to delete this post?'
		          actions={modalActions}
		          modal={true}
		          open={this.state.deleteModal}
		        >
		          Click Delete button to confirm.
		        </Dialog>
        	</CardText>

        </Card>
			</div>
		)
	}
}