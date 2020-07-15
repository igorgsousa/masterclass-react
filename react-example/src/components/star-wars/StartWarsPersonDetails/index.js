import React, { Component } from 'react';

import {Container, SearchForm, SearchInput, SearchButton} from './css'
import {findById} from '../../../services/StarWarsService ' 

function Field(props){
    return (
        <div>
            <span>{props.label} : </span>{props.value}
        </div>
    );
}

function StarWarsPersonDetails(props) {

    return (
        <>
            {!!props.show&&(
                <Container>
                    <Field label="Nome" value={props.person.name} />
                    <Field label="Altura" value={props.person.height} />
                    <Field label="Peso" value={props.person.mass} />
                    <Field label="Genero" value={props.person.gender} />
                    <Field label="IMC" value={props.person.mass/(Math.pow((props.person.height/100), 2))} />
                </Container>
                )
            }
        </>
    )   
}

export default StarWarsPersonDetails;
