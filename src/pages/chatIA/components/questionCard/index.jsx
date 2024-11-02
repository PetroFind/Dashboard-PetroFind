import React from 'react';
import {Container, Paragraph} from './styles.js';

const QuestionCard = (props) => {
  return (
    <Container width='260px'>
     <Paragraph>
       {props.text}
     </Paragraph>
    </Container>
  )
}

export default QuestionCard;
