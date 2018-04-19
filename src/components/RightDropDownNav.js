import React from 'react';

import MenuItem from 'material-ui/MenuItem';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';



class RightDropDownNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
          <MenuItem primaryText="End Fascism" />
            <MenuItem primaryText="Help" />
            <MenuItem containerElement={<Link to="/" />} primaryText="Sign out" />
        </IconMenu>
      </div>
    );
  }
}

export default RightDropDownNav;

