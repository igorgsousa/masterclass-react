import React from 'react';

import {Container} from './css'

function ProfileContainer(props) {
  return (     
      <Container>
        {props.children}
      </Container>
  );
}

export default ProfileContainer;
