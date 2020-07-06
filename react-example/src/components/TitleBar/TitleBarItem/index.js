import React from 'react';
import {Link} from "react-router-dom";


function TitleBarItem(props) {
  return (     
        <Link to={props.to}>{props.label}</Link>     
  );
}

export default TitleBarItem;
