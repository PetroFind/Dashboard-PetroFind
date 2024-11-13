import React from 'react'

import ImageBox from '../imageBox';

import {Container, Answer} from './styles.js'

const Message = ({message}) => {
  return (
    <Container width='35'>
      <ImageBox iconSize='20px'/>
      <Answer>{message}</Answer>
    </Container>
  )
}

export default Message;