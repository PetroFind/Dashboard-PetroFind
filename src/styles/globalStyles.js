import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
  
}

* {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
}
p, a, h1 {
  color: ${({theme}) => theme.colors.text};
}
body {
  background: ${({theme}) => theme.colors.background};

}
::-webkit-scrollbar-track {
    background-color: #363636;
}
::-webkit-scrollbar {
    width: 6px;
  
   
}
::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.secondary};
    border-radius: 6px;
}
`

export default GlobalStyle