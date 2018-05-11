import React from 'react';
import EmpJob from './EmpJob';
import { getJobs } from '../actions/employerActions';
import { CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class EmpListJobs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companyId: '',
			jobs: []
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

	componentDidMount() {
		getJobs()
			.then(data => {
				console.log('in emplistjobs.js ', data)
				this.setState({
					companyId: 'abc',
					jobs: data
				});
			});
	};

	render() {
		return (
			<div>
				<h3>EmpListJobs.js</h3>
				<Paper zDepth={3}>
					<List>
          	<p>Currently open jobs </p>
          	<Divider />
		          <CardText expandable={true}>
		          	{this.state.jobs.map((job) => (
										<EmpJob key={job._id} job={job} />
									)
								)}
		        	</CardText>
          </List>
				</Paper>
			</div>
		)
	}
}

