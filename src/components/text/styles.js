import styled from 'styled-components';

export const Paragraph = styled.div`
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
`;