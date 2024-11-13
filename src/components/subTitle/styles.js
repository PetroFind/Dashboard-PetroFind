import styled from 'styled-components'; 

export const Container = styled.div`
  color: ${({color}) => color};
  font-weight: bold;
  font-size: 1.5em;
  padding: ${({padding}) => padding};
  padding: ${({margin}) => margin};
`;