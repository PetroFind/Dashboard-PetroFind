import { useState } from 'react';

import { Container, Box, Items, Item, Icon } from './styles';

import { MdOutlineGridView, MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const dropdownPage = () => {
    const [open, setOpen] = useState(() => {
        return false;
      })
    
      const handleClick = () => {
        setOpen((prev) => prev === false ? true : false);
      }

return (
    <Container>
    <Box onClick={handleClick}>
    <section>
    <MdOutlineGridView size={24}/>
    <p>teste</p>
    </section>
      {
        open === false ? <MdKeyboardArrowUp size={24}/> : <MdOutlineKeyboardArrowDown size={24}/>
      }

    </Box>
    {open && (
      <Items>
        <Item><Icon/>teste</Item>
        <Item><Icon/>teste</Item>
      </Items>
    )}
    </Container>
)
}

export default dropdownPage;
