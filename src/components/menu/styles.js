import styled from 'styled-components'

export const Container = styled.div`
color: ${({theme}) => theme.colors.secondary};
background-color: blue;
flex-direction: column;
height: 100vh;
display: flex;
padding: 12px;
width: 275px;
gap: 12px;
`

export const Header = styled.div`
justify-content: space-between;
border: 1px solid black;
align-items: center;
display: flex;
height: 50px;
width: 100%;
`