import React, { useState, useContext } from 'react';

import { ThemeContext } from '../../../context';

import { Container, Box, Items, Item, Icon } from './styles';

import { MdOutlineGridView, MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Dropdown = () => {

  const [open, setOpen] = useState(() => {
    return false;
  })

  const {theme, toggleTheme} = useContext(ThemeContext);

  const handleClick = () => {
    setOpen((prev) => prev === false ? true : false);
  }
  
  return (
    <Container>
    <Box onClick={handleClick}>
    <section>
    <MdOutlineGridView size={24}/>
    <p  onClick={() => toggleTheme()}>{theme}</p>
    </section>
      {
        open === false ? <MdKeyboardArrowUp size={24}/> : <MdOutlineKeyboardArrowDown size={24}/>
      }

    </Box>
      <Items open={open} mode={theme}>
        <Item><Icon/>teste</Item>
        <Item><Icon/>teste</Item>
      </Items>
    </Container>
  )
}

export default Dropdown;