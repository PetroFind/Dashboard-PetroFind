import { ThemeProvider } from 'styled-components';

import ThemeContextProvider from './components/context';

import Router from './routes';
import {theme} from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import config from './assets/config';

function App() {
  return (
    <ThemeContextProvider>
    <ThemeProvider theme={theme}>
      <title>{config?.pageTitle}</title>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;

