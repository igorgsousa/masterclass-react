import React from 'react';
import TitleBarItem from './TitleBarItem';

import ProfileContainer from './ProfileContainer';
import LogoutButton from './LogoutButton';
import {getLoggedUser} from '../../services/AuthenticationService';

function TitleBar(props) {
  return (     
      <div style={{height: "60px",  display: "flex", position : "relative",   backgroundColor: "#a1245e",      alignItems: "center"}}>
        <TitleBarItem label="Home" to="/"/>
        <TitleBarItem label="Star Wars" to="/star-wars"/>
        <TitleBarItem label="Calculator" to="/calculator"/>
        <ProfileContainer> 
          <div>
            {getLoggedUser().name}
          </div>
          <LogoutButton/>
        </ProfileContainer>
      </div>
  );
}

export default TitleBar;
