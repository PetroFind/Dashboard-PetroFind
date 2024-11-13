import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    padding: 0 24px;
    display: flex;
    height: auto;
    gap: 24px;
    width: 100%;
`

export const Header = styled.div`
justify-content: space-between;
align-items: center;
display: flex;
height: 75px;
width: 100%;
`

export const HeaderButton = styled.button`
background-color: ${({ theme }) => theme.colors.transparent};
color: ${({ theme }) => theme.colors.coal};
text-transform: capitalize;
align-items: center;
font-size: 12px;
font-weight: 600;
display: flex;
cursor: pointer;
outline: none;
border: none;
height: 24px;
width: auto;
gap: 6px;
`

export const Navigation = styled.div`
border: 1px solid black;
display: flex;
height: 50px;
width: 100%;
`

export const GraphRow = styled.div`
align-items: center;
display: flex;
width: 100%;
gap: 12px;
`

export const LineChartBox = styled.div`
justify-content: space-between;
border-top: 2px solid ${({theme}) => theme.colors.gray};
width: 100%;
padding: 24px 0;
height: 60vh;
display: flex;

& > section {
height: 100%;
display: grid;
flex: 1;
padding: 12px;
place-items: center;
}
`

export const Box = styled.div`
height: 100%;
width: 150px;
border: 2px solid ${({theme}) => theme.colors.gray};
border-radius: 10px;
`

export const MapBox = styled.div`
border: 1px solid ${({ theme }) => theme.colors.coal};
border-radius: 10px;
height: 100vh;
width: 100%;

& > section {    
    flex-direction: row;
    padding: 0 12px;
    display: flex;
    width: 100%;
    gap: 12px;
}
`

export const InfoBox = styled.div`
border: 1px solid ${({theme}) => theme.colors.coal};
border-radius: 10px;
display: flex;
width: 100%;
`

export const InfoItem = styled.div`
border: 1px solid ${({theme}) => theme.colors.coal};
width: calc(100% / 4);
height: 25vh;
`

export const SecondaryGraphRow = styled.div`
width: 100%;
height: 60vh;
border-radius: 10px;
display: flex;
gap: 12px;
flex-direction: row;
align-items: center;
`

export const TertiaryGraphRow = styled.div`
width: 100%;
height: 75vh;
border-radius: 10px;
border: 1px solid black;
`

