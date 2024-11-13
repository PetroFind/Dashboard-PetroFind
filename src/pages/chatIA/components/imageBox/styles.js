import styled from 'styled-components';

export const Container = styled.div`
   width: ${({width}) => width}vw;
   justify-items: center;
   align-items: center;
   border-radius: 15px;
   position: relative;
   padding: 30px 25px;
   display: flex;
   height: 0.2vh;
   gap: 20px;

   @media (max-width: 678px) {
     width: 60%;
     gap: 15px;
   }
`

export const BoxImagem = styled.div`
  background: ${({theme}) => theme.colors.secondaryBackground};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 40px;
  width: 40px;

  @media (max-width: 678px) {
    height: 35px;
    width: 35px;
    
   }
`

export const Name = styled.h5`
 color: ${({theme}) => theme.colors.secondaryText};
 font-size: 1rem;
`