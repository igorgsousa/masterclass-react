import React, {Component} from 'react';

class Calculator extends React.Component {
  render() {
    return( 
        <form> 
          <div>
            <label>Valor 1</label>
            <input type="text" name="valueOne"></input>
          </div>
          <div>
            <label>Valor 2</label>
            <input type="text" name="valueTwo"></input>
          </div>
          <button type="button">Cacular</button>
          <br/>
          <span> O resultado eh: </span>
        </form>
      );
  }
}

export default Calculator;
