import styled from 'styled-components'

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.secondaryBackground};
flex-direction: column;
display: flex;
height: 100%;
width: 100%;

@media (max-width: 678px) {
  padding-left: 0;
}
`