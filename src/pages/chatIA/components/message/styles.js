import styled from 'styled-components';

export const Container = styled.div`
   background: ${({theme}) => theme.colors.background};
   width: ${({width}) => width}vw;
   flex-direction: column;
   border-radius: 15px;
   min-height: 15vh;
   display: flex;
   height: auto;

   @media (max-width: 678px) {
     width: 60%;
   }
`

export const Answer = styled.p`
   padding: 10px 80px;
`