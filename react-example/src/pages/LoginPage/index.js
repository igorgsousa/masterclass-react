import React from 'react';

import MyInputText from '../../components/MyInputText'


class LoginPage extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        username : '',
        password : '',
    }

    this.onChange = this.onChange.bind(this);
    this.doLogin = this.doLogin.bind(this);

  }

  onChange(e){
    e.persist()
    this.setState({ [e.target.name] :  e.target.value})
  }

  doLogin(){
    alert("Seu uusario é"+this.state.username+"Sua senha é:"+this.state.password)
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
        </form>
      );
  }
}


export default LoginPage;
