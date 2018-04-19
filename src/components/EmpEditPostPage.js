import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import EmpJob from './EmpJob';
import { Link } from 'react-router-dom';
import { updateJob } from '../actions/employerActions';

class EmpEditPostPage extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('state in EmpEditPostPage.js is ', this.state)
		updateJob(this.state);
	}

	///// working above still

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		console.log('PROPS ', this.props);
		var { job } = this.props;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<p>
						<TextField
							name='jobTitle'
							type='text'
							floatingLabelText='Job Title'
							hintText='...enter job title...'
							fullWidth={false}
							onChange={this.handleChange}
							defaultValue={job.jobTitle}
						/>
					</p>
					<p>
						<TextField
							name='_id'
							type='text'
							floatingLabelText='JOBID'
							// floatingLabelFixed={true} allows floatingLabelText to always be displayed
							hintText='JOBID'
							fullWidth={false}
							onChange={this.handleChange}
							defaultValue={job._id}
						/>
					</p>
					<p>
						<TextField
							name='url'
							type='text'
							floatingLabelText='Company URL'
							hintText='...enter URL...'
							fullWidth={false}
							onChange={this.handleChange}
							defaultValue={job.url}
						/>
					</p>
					<p>
						<TextField
							name='location'
							type='text'
							floatingLabelText='Location'
							hintText='...enter location...'
							fullWidth={false}
							onChange={this.handleChange}
							defaultValue={job.location}
						/>
					</p>
					<p>
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
						/>
					</p>

					<p>
						<TextField
							name='skills'
							type='text'
							floatingLabelText='Job Skills/Requirements'
							hintText='...enter job requirements...'
							fullWidth={true}
							onChange={this.handleChange}
							defaultValue={job.skills}
						/>
					</p>
					<RaisedButton
						label="Cancel"
						secondary={true}
						containerElement={<Link to="/employer/dash" />}
						onClick={this.handleClose}

					/>
					<RaisedButton
						label="Update Post"
						primary={true}
						keyboardFocused={true}
						onClick={this.handleClose}
						type="submit"
					/>
				</form>

			</div>
		);
	}
}

export default EmpEditPostPage;