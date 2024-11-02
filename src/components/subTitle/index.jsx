import React from 'react';
import {Container} from './styles';

const SubTitle = (props) => {
  return(
    <Container color={props.color} padding={props.padding} margin={props.margin}>
      {props.text}
    </Container>
  )
};

export default SubTitle;