import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    background: ${({theme}) => theme.colors.background};
    border-radius: 20px 0px 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    margin: 30px;
    text-align: center;
    font-size: 2.5em;
`

export const Paragraph = styled.p`
    padding: 10px;
`