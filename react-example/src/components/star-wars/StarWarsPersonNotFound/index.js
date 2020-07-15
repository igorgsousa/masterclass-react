import React, { Component } from 'react';

import {Container} from './css'

function StarWarsPersonNotFound(props) {

    return (
        <>
            {!!props.show&&(
                <Container>
                    Não consegue né moises
                </Container>
                )
            }
        </>
    )   
}

export default StarWarsPersonNotFound;
