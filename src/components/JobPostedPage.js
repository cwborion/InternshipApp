import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';

class JobPostedPage extends React.Component {
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
				<div>
					<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
						<CardHeader
							title="{Employer name}"
							//Consider using subtitle to hold the date job was posted
							subtitle="{Job Title}"
							avatar="https://i.imgur.com/Vl1o1QB.jpg"
							actAsExpander={true}
							showExpandableButton={false}
						/>
						<Toggle
							toggled={this.state.expanded}
							onToggle={this.handleToggle}
							labelPosition="right"
							// label="This toggle controls the expanded state of the component."
							label="{Click the toggle to learn more(text should disappear when toggle is fired)}"
						/>
						<CardTitle
							// title="{Job Title}" 
							// subtitle="Intentionally left blank" 
							expandable={true}
						/>
						<CardMedia
							expandable={true}
							//subtitle text may be discarded, but should include an expiry date or something useful 
							overlay={<CardTitle title="{Job Title}" subtitle="{Date Job Posted}" />}
						>
							<img src="https://i.imgur.com/dH62lSR.jpg" alt="" />
						</CardMedia>

						<CardTitle title="Job Description" subtitle="" expandable={true} />
						<CardText expandable={true}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		          	<CardTitle title="Required Skills" subtitle="" />
							<CardText >
								<div>
									Have element(s) populate here.
			          		</div>
							</CardText>

							<CardTitle title="Required Education" subtitle="" />
							<CardText >
								<div>
									Have element(s) populate here.
			          		</div>
							</CardText>

							<CardTitle title="Minimum Power Level" subtitle="" />
							<CardText >
								<div>
									Have element(s) populate here.
			          		</div>
							</CardText>

							<CardTitle title="Mage Skills" subtitle="" />
							<CardText >
								<div>
									Have element(s) populate here.
			          		</div>
							</CardText>
							<FlatButton
								containerElement={<Link to="/edit/job/post" />}
								label="Edit Post"
								primary={true}
								hoverColor="#212121"
								rippleColor="#FFE082"
							/>

						</CardText>
						<CardActions>
							<FlatButton
								label="Apply"
								primary={true}
								hoverColor="#212121"
								rippleColor="#FFE082"
							/>
							<FlatButton
								label="Favorite"
								secondary={true}
								hoverColor="#212121"
								rippleColor="#FFE082"
							/>
						</CardActions>
					</Card>
				</div>
			</div>
		);
	}
}

export default JobPostedPage;