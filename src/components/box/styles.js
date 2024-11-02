import styled from 'styled-components';

export const Container = styled.div`
  background: ${({theme}) => theme.colors.background};
  width: ${({width}) => width};
  height: ${({height}) => height};
  border-radius: 10px;
`;