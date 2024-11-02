import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
`;