import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
`

export const Value = styled.div`
color: ${({theme}) => theme.colors.coal};
font-size: 14px;
font-weight: bold;
`

export const Text = styled.div`
color: ${({theme}) => theme.colors.coal};
font-size: 10px;
`