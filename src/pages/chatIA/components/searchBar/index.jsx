import React from 'react';

import {MdSend} from 'react-icons/md';

import {Container, InputSearch, Button} from './styles.js';

const SearchBar = ({iconSize, onChange}) => {
  return (
    <Container width='50'>
      
       <InputSearch 
         type='text' 
         placeholder='Digite aqui sua mensagem...' 
         onChange={(e) => onChange(e.target.value)}
       />
      
      <Button>
        <MdSend 
          size={iconSize} 
          color={({ theme }) => theme.colors.secondaryBackground} 
        />
      </Button>
      
    </Container>
  )
}


export default SearchBar;