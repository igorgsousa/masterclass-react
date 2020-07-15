import React, { Component } from 'react';

import {Alert} from 'react-bootstrap'


function StarWarsPersonNotFound(props) {

    return (
        <>
            {!!props.show&&(
                <Alert variant="danger">
                    Não consegue né moises
                </Alert>
                )
            }
        </>
    )   
}

export default StarWarsPersonNotFound;
