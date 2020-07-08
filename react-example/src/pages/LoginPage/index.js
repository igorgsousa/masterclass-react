import React from 'react';
import { Redirect } from "react-router-dom";

import MyInputText from '../../components/MyInputText'
import {authenticate} from '../../services/AuthenticationService'


class LoginPage extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        username : '',
        password : '',
        logged : false
    }

    this.onChange = this.onChange.bind(this);
    this.doLogin = this.doLogin.bind(this);

  }

  onChange(e){
    e.persist()
    this.setState({ [e.target.name] :  e.target.value})
  }

  doLogin(){

    if(!this.state.username || !this.state.username === '' ){
      alert('Preencha o usuário')
      return;
    }
    if(!this.state.password || !this.state.password === '' ){
      alert('Preencha a senha')
      return;
    }

    let result = authenticate(
      {
        username : this.state.username,
        password : this.state.password
      }
    )

    if(result){
      this.setState({logged:true});
    }
  }


  render() {
    return( 
        <form> 
          <h3>{this.props.title}</h3>
            <MyInputText label="Usuário" name="username" 
                        value={this.state.username} onChange={this.onChange}/>
            <MyInputText label="Senha" name="password" 
                        value={this.state.password} onChange={this.onChange} password={true}/>             
          <button type="button" onClick={this.doLogin} >Logar</button>

          {this.state.logged&&<Redirect to={{ pathname : '/', state:{ from: this.props.location } }} />}
        </form>
      );
  }
}


export default LoginPage;
