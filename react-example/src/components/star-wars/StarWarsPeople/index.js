import React, { Component } from 'react';
import {Container, Row, Col, Form, Button,InputGroup} from 'react-bootstrap'

import {SearchForm, SearchButton} from './css'
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
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Form>
                                <InputGroup>
                                    <Form.Control id="personId" name="personId"  type="text" placeholder="Digite um id" 
                                                onChange={this.onChange}
                                                value={this.state.personId}/>
                                                
                                    <InputGroup.Append>
                                        <Button variant="primary" onClick={this.onClickSearchButton} >Pesquisar</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                
                            </Form>   
                            <SearchForm>
                                <div>
                                    { this.state.personIdError&&<span>{this.state.personIdError}</span> }
                                </div>
                            </SearchForm>
                            <StarWarsPersonDetails  show={!!this.state.person} person={this.state.person}/>
                            <StarWarsPersonNotFound show={this.state.showNotFoundMessage}/>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default StarWarsPeople;
