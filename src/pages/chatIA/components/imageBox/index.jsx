import React from 'react';

import {MdPerson} from 'react-icons/md';

import { Container, BoxImagem, Name} from './styles.js'

const ImageBox = ({iconSize}) => {
  return(
    <Container>
      <BoxImagem>
        <MdPerson color={({ theme }) => theme.colors.text} size={iconSize}/>  
      </BoxImagem>
        <Name>IA</Name>
    </Container>
  )
}

export default ImageBox;