
import styled from 'styled-components'

export const Container = styled.div`
  background: ${({theme}) => theme.colors.background};
  justify-content: end;
  align-items: center;
  flex-direction: row;
  display: flex;
  height: 8vh;
  width: 100%;
  gap: 20px;
  
& > svg {
      color: ${({theme}) => theme.colors.secondaryBackground};
      font-size: 30px;
      cursor: pointer;
    }

`

export const IconsArea = styled.div`
 align-items: center;
 display: flex;
 height: 100%;
 widht: 100%;
 gap: 20px;
`
