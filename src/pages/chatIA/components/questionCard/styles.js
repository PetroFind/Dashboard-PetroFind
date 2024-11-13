import styled from 'styled-components';

export const Container = styled.div`
   background: ${({theme}) => theme.colors.background};
   width: ${({width}) => width};
   height: 90px;
   padding: 10px;
   border-radius: 10px;
   display: grid;
   place-items: center;
`

export const Paragraph = styled.p`
  color: ${({theme}) => theme.colors.text};
  font-size: 1.1em;
  font-weight: semi-bold;
`