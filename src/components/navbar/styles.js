
import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.graySecondary};
  background: ${({theme}) => theme.colors.background};
  box-sizing: border-box;
  justify-content: end;
  align-items: center;
  flex-direction: row;
  display: flex;
  padding: 12px;
  width: 100%;
  gap: 24px;
  
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
 gap: 20px;
`
