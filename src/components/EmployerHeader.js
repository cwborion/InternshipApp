import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import EmployerDropDownNav from './EmployerDropDownNav';

// in order to pick what we like best, comment in and out ToolbarGroup or DropDownMenu in DropDownNav.js 
import RightDropDownNav from './RightDropDownNav';

import SearchBar from 'material-ui-search-bar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const MyNavLinks = () => (
  <ToolbarGroup>
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
    <FlatButton containerElement={<RightDropDownNav />}/>
  </ToolbarGroup> 
);

const EmployerHeader = () => (
  <AppBar
    title="JobFinderApp"
    iconElementLeft={<EmployerDropDownNav />}
    iconElementRight={<MyNavLinks />}
    // iconElementRight={<RightDropDownNav />}
  />
);

export default EmployerHeader;


