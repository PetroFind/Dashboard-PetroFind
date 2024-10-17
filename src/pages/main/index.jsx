import React from 'react';

import { Container, Box } from './styles';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ChatIA from '../../components/chatIA';


const Main = () => {

    return (
        <Container>
            <Box>
              <ChatIA/>
            </Box>
        </Container>
    )
}

export default Main