import React, { Component } from 'react';

import {findById} from '../../../services/StarWarsService ' 

class StarWarsPeople extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            person: undefined
        }
    }

    componentDidMount = () => {

        findById(1).then(res =>  res.json().then(
            res =>  this.setState({person : res})
        )).catch(err => {
          throw err;
        });
    }

    render() {
        return (
            <div>
                {this.state.person && <span> {JSON.stringify(this.state.person)} </span>}
            </div>
        );
    }
}

export default StarWarsPeople;
