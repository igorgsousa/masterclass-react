import React from 'react';
import TitleBarItem from './TitleBarItem';


function TitleBar(props) {
  return (     
      <div style={{height: "60px",  display: "flex",   backgroundColor: "#a1245e",      verticalAlign: "middle"}}>
        <TitleBarItem label="Home" to="/"/>
        <TitleBarItem label="Star Wars" to="/star-wars"/>
        <TitleBarItem label="Calculator" to="/calculator"/>
      </div>
  );
}

export default TitleBar;
