import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import {SearchForm, SearchInput, SearchButton} from './css'
import {findById} from '../../../services/StarWarsService ' 

import StarWarsPersonDetails from '../StartWarsPersonDetails'
import StarWarsPersonNotFound from '../StarWarsPersonNotFound'


class StarWarsPeople extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            person: undefined,
            personId : undefined,
            showNotFoundMessage: false,
            personIdError : ""
        }
    }

    search = () => {

        if(this.state.personId && this.state.personId != ""){
            findById(this.state.personId).then(res =>{
                
                if(res.ok){
                    return res.json().then(
                        res =>  {
                            this.setState({person : res, showNotFoundMessage : false, personIdError : undefined})
                        } )
                }else{
                    return Promise.reject('some error happend maybe 404')
                }
            }).catch(err => {
                this.setState({person : undefined, showNotFoundMessage : true})
            });
        }else{
            this.setState({person : undefined, showNotFoundMessage : false, personIdError : "Digite o id do personagem"})
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name] :  e.target.value, [e.target.name+"Error"] :false})
    }

    onClickSearchButton = (e) => {
        this.search();
    }

    render() {
        return (

            <Container>
                <Row>
                    <Col sm={12} md={8} lg={6} xl={4} style={{backgroundColor:'red'}}>
                        <SearchForm>
                            <div>
                                <SearchInput name="personId" 
                                            value={this.state.personId}
                                            onChange={this.onChange}
                                            placeholder="Digite um id"/>
                                <SearchButton type="button" onClick={this.onClickSearchButton}> Pesquisar </SearchButton>
                            </div>
                            <div>
                                { this.state.personIdError&&<span>{this.state.personIdError}</span> }
                            </div>
                        </SearchForm>
                        <StarWarsPersonDetails  show={!!this.state.person} person={this.state.person}/>
                        <StarWarsPersonNotFound show={this.state.showNotFoundMessage}/>
                    </Col>
                    <Col sm={12} md={4} lg={6} xl={6} style={{backgroundColor:'green'}}>
                        a
                    </Col>    
                </Row>
            </Container>
        );
    }
}

export default StarWarsPeople;
