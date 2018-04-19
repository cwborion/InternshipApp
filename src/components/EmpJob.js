import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import EmpEditPostPage from './EmpEditPostPage';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';

import { deleteJob } from '../actions/employerActions';

export default class EmpJob extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			expanded: false,
			open: false,
			openModal: false
		}
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

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  updateJob = () => {
  };

  deleteConfirm = () => {
  	this.setState({ openModal: !this.state.openModal })
  };

  handleDeleteJob = (event) => {
    deleteJob(this.state);
  }

// functions to write job props to state to pass into child component

	render () {
		var {job} = this.props;
		const actions = [
      // <RaisedButton
      //   label="Cancel"
      //   secondary={true}
      //   containerElement={<Link to="/employer/dash" />}
      //   onClick={this.handleClose}

      // />,
      // <RaisedButton
      //   label="Submit"
      //   primary={true}
      //   keyboardFocused={true}
      //   onClick={this.handleClose}
      // />
    ];

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
    		disabled={true}
    		onClick={this.handleDeleteJob}
    	/>
    ]
		
		return(
			<div>
        <Dialog
          title='Edit Job Post'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <EmpEditPostPage job={this.props.job} />
        </Dialog>
				<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

					<CardText>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label={job.jobTitle}
            />
          </CardText>
	          <CardText expandable={true}>
	          	
	          	<div>
	          		<h5>{job.timePosted}</h5>
	          	</div>
	          	<div>
	          		<h5>{job.location}</h5>
	          	</div>
	          	<div>
	          		<h5>{job.skills}</h5>
	          	</div>
	          	<div>
	          		<h5>{job.jobDescription}</h5>
	          	</div>	          	
							 <div>
								<FlatButton label='Update' primary={true} onClick={this.handleOpen}

									// ANOTHER FUNCTION NEEDS TO HAPPEN HERE TO SET STATE 

								 />

								<RaisedButton label="Delete" secondary={true} onClick={this.deleteConfirm} />
				        <Dialog
				          title='Are you sure you want to delete this post?'
				          actions={modalActions}
				          modal={true}
				          open={this.state.openModal}
				        >
				          Click Delete button to confirm.
				        </Dialog>

								
						  </div>
	        	</CardText>
        </Card>
			</div>
		)
	}
}

