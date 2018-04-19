import React from 'react';
import EmpJob from './EmpJob';
import { getJobs } from '../actions/employerActions';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


const style = {
  height: 100,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


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

