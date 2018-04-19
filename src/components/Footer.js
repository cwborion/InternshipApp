import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const helpIcon = <FontIcon className="material-icons" >help</FontIcon>;
const contactIcon = <FontIcon className="material-icons">mail_outline</FontIcon>;
const copyrightIcon = <FontIcon className="material-icons">copyright</FontIcon>



/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1} className="Footer">
        <BottomNavigation>
          <BottomNavigationItem
            label="Help"
            icon={helpIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Copyright"
            icon={copyrightIcon}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Contact"
            icon={contactIcon}
            onClick={() => this.select(1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;

/* <BottomNavigation selectedIndex={this.state.selectedIndex}>    line 26       */