import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import StudentDropDownNav from './StudentDropDownNav';

// in order to pick what we like best, comment in and out ToolbarGroup or DropDownMenu in DropDownNav.js 
import RightDropDownNav from './RightDropDownNav';

import SearchBar from 'material-ui-search-bar';
import { ToolbarGroup } from 'material-ui/Toolbar';

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
    <FlatButton label='RightDropDownNav' containerElement={<RightDropDownNav />}/>
  </ToolbarGroup> 
);

const StudentHeader = () => (
  <AppBar
    title="JobFinderApp"
    iconElementLeft={<StudentDropDownNav />}
    iconElementRight={<MyNavLinks />}
    // iconElementRight={<RightDropDownNav />}
  />
);

export default StudentHeader;


