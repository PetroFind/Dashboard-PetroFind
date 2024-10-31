import styled from 'styled-components';

export const Container = styled.div`
   background: ${({theme}) => theme.colors.background};
   width: ${({width}) => width}vw;
   border-radius: 10px;
   position: relative;
   display: flex;
   height: 5vh;

   @media (max-width: 678px) {
     width: 100%;
   }
`

export const InputSearch = styled.input`
   padding-right: 40px;
   background: transparent;
   padding: 0 16px;
   outline: none;
   border: none;
   height: 100%;
   width: 100%;
`

export const Button = styled.button`
    transform: translateY(-50%);
    justify-content: center; 
    background: transparent;
    align-items: center;
    position: absolute;
    cursor: pointer;
    outline: none;
    display: flex;
    border: none;
    height: 40px; 
    right: 10px;
    width: 40px; 
    top: 50%;

    &:hover{
       opacity: 0.8;
    }
`

