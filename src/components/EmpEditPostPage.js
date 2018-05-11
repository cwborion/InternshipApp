import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { updateJob } from '../actions/employerActions';

class EmpEditPostPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: this.props._id
		}
		this.handleSubmit = this.handleSubmit.bind(this);		
	}

	handleSubmit = (id) => {
		console.log('id is ', id);
		// event.preventDefault();
		console.log('state in EmpEditPostPage.js is ', this.state);
		updateJob(id, this.state);
	}

	///// working above still

	handleChange = (event) => {
		this.setState({
										[event.target.name]: event.target.value 
									});
	};

	handleClose = (event) => {

	}
	
	render() {
		var { job } = this.props;
		console.log('job in empeditpostpage.js render is ', job)
		return (
			<div>
				<form onSubmit={this.handleSubmit(job._id)}>
					<br />
					<TextField
						name='jobTitle'
						type='text'
						floatingLabelText='Job Title'
						hintText='...enter job title...'
						fullWidth={false}
						onChange={this.handleChange}
						defaultValue={job.jobTitle}
						value={this.state.value}
					/>
					<br />
					<TextField
						name='url'
						type='text'
						floatingLabelText='Company URL'
						hintText='...enter URL...'
						fullWidth={false}
						onChange={this.handleChange}
						defaultValue={job.url}
						value={this.state.value}
					/>
					<br />
					<TextField
						name='location'
						type='text'
						floatingLabelText='Location'
						hintText='...enter location...'
						fullWidth={false}
						onChange={this.handleChange}
						defaultValue={job.location}
						value={this.state.value}
					/>
					<br />
					<TextField
						name='jobDescription'
						type='text'
						style={{ textAlign: 'left' }}
						floatingLabelText='Job Description'
						hintText='...enter job description...'
						multiLine={true}
						// rows={2} allows two rows to be viewed simultaneously 
						fullWidth={true}
						onChange={this.handleChange}
						defaultValue={job.jobDescription}
						value={this.state.value}
					/>					
					<br />					
					<TextField
						name='skills'
						type='text'
						floatingLabelText='Job Skills/Requirements'
						hintText='...enter job requirements...'
						fullWidth={true}
						onChange={this.handleChange}
						defaultValue={job.skills}
						value={this.state.value}
					/>
					<br />
					<RaisedButton
						label="Cancel"
						secondary={true}
						containerElement={<Link to="/employer/dash" />}
						onClick={this.props.handleOpen}

					/>
					<RaisedButton
						label="Update Post"
						primary={true}
						keyboardFocused={true}						
						type="submit"
						onClick={this.props.handleOpen}
					/>
				</form>

			</div>
		);
	}
}

export default EmpEditPostPage;