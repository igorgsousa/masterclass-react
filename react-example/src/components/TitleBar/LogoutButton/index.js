import React from 'react';
import { Redirect } from "react-router-dom";

import {logout} from '../../../services/AuthenticationService';

class LogoutButton extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        redirect : false
    }

    this.doLogout = this.doLogout.bind(this);
  }

  doLogout(){
    logout();
    this.setState({redirect : true});
  
  }  

  render() {
    return (     
        <div onClick={this.doLogout} style={{height: "60px",  padding: "0px 10px", marginLeft : "5px", display: "flex", cursor : "pointer",   alignItems: "center"}}>
          Sair
          {this.state.redirect&&<Redirect to={{ pathname : '/login', state:{ from: this.props.location } }} />}
        </div>
    );
  }
}

export default LogoutButton;
