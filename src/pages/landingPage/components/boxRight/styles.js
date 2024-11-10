import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    position: relative;
    height: 100%;
    border-radius: 0px 20px 20px 0px;
    background-image: url('images/mapa-de-fundo.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
`

export const BackgroundOverlay = styled.div`
    z-index:1;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0px 20px 20px 0px;
    background: ${({theme}) => theme.colors.secondaryPetrobras};
    filter: opacity(.7);
`

export const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: absolute;
    background: transparent;
    
    & ul{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        list-style: none;
    }

    & li::before {
    content: '';
    position: absolute;
    left: 50px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: transparent;
    border: 5px solid ${({ theme }) => theme.colors.primaryPetrobras}; /* Espessura da borda */
}

    & li{
        color: ${({theme}) => theme.colors.primaryPetrobras};
        font-size: 1.5em;
        font-weight: 600;
    }
` 